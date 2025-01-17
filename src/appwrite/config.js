import config from "../config/config";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new this.bucket(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw new Error(`Create Post failed: ${error.message}`);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      throw new Error(`Create Post failed: ${error.message}`);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw new Error(`Create Post failed: ${error.message}`);
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
    } catch (error) {
      throw new Error(`Create Post failed: ${error.message}`);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.getDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        queries
      );
    } catch (error) {
      throw new Error(`Create Post failed: ${error.message}`);
    }
  } 


    // upload file
  
  async uploadFile(file) {
    try {
        return await this.bucket.createFile(
            config.appWriteBucketId,
            ID.unique(),
            file,
        )
    } catch (error) {
        throw new Error(`Create Post failed: ${error.message}`);
    }
  }

  async deleteFile(fileId) {
    try {
        return await this.bucket.deleteFile(
            config.appWriteBucketId,
            fileId,
        )
    } catch (error) {
        throw new Error(`Create Post failed: ${error.message}`);
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
        config.appWriteBucketId,
        fileId,
    )
  }
}

const service = new Service();

export default service;
