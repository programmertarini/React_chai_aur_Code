const conf = {
  appwriteUrl: String(process.env.REACT_APP_APPWRITE_URL),
  appwriteProjectID: String(process.env.REACT_APP_PROJECT_ID),
  appwriteDatabaseID: String(process.env.REACT_APP_DATABASE_ID),
  appwriteCollectionID: String(process.env.REACT_APP_COLLECTION_ID),
  appwriteBucketID: String(process.env.REACT_APP_BUKECT_ID),
};
export default conf;