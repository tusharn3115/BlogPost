const config = {
    appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProjectId: String(import.meta.env.PROJECT_ID),
    appWriteDatabaseId: String(import.meta.env.DATABASE_ID),
    appWriteCollectionId: String(import.meta.env.COLLECTION_ID),
    appWriteBucketId: String(import.meta.env.BUCKET_ID),
}

export default config