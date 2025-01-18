import config from "../config/config";
import { Client, Account, ID } from "appwrite";

class AuthService {
    constructor() {
        this.client = new Client()
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            return userAccount ? this.login({ email, password }) : null;
        } catch (error) {
            throw new Error(`Account creation failed: ${error.message}`);
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmaiSession(email, password);
        } catch (error) {
            throw new Error(`Login failed: ${error.message}`);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw new Error(`Failed to fetch current user: ${error.message}`);
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw new Error(`Logout failed: ${error.message}`);
        }
    }
}

// Export a singleton instance of AuthService
const authService = new AuthService();
export default authService;