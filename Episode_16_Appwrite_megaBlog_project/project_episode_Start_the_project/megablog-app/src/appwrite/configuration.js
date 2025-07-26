// Import configuration settings and Appwrite SDK components
import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

/**
 * Service class for handling all Appwrite backend operations
 * This class provides methods for managing posts (CRUD operations) and file storage
 */
export class Service {
  // Initialize Appwrite client and service instances
  client = new Client();
  databases;
  storage;

  constructor() {
    // Configure the Appwrite client with endpoint URL and project ID
    this.client
      .setEndpoint(config.appwriteUrl) // Set the Appwrite server URL
      .setProject(config.appwriteProjectID); // Set the project ID from config

    // Initialize database and storage services with the configured client
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  // POST MANAGEMENT METHODS

  /**
   * Creates a new post in the database
   * @param {Object} postData - Object containing post information
   * @param {string} postData.title - Post title
   * @param {string} postData.slug - URL-friendly identifier (used as document ID)
   * @param {string} postData.content - Post content/body
   * @param {string} postData.featured_image - Featured image file ID
   * @param {string} postData.status - Post status (active/inactive)
   * @param {string} postData.userID - ID of the user creating the post
   * @returns {Promise} - Returns the created document or undefined on error
   */
  async createPost({ title, slug, content, featured_image, status, userID }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseID, // Database ID from config
        config.appwriteCollectionID, // Collection ID from config
        slug, // Using slug as document ID for SEO-friendly URLs
        {
          title,
          content,
          featured_image,
          status,
          userID,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
      // Note: Returns undefined on error (could return false for consistency)
    }
  }

  /**
   * Updates an existing post in the database
   * @param {string} slug - The slug/document ID of the post to update
   * @param {Object} updateData - Object containing fields to update
   * @param {string} updateData.title - Updated post title
   * @param {string} updateData.content - Updated post content
   * @param {string} updateData.featured_image - Updated featured image file ID
   * @param {string} updateData.status - Updated post status
   * @returns {Promise} - Returns the updated document or undefined on error
   */
  async updatePost(slug, { title, content, featured_image, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseID, // Database ID from config
        config.appwriteCollectionID, // Collection ID from config
        slug, // Document ID to update
        {
          title,
          content,
          featured_image,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
      // Note: Returns undefined on error (could return false for consistency)
    }
  }

  /**
   * Deletes a post from the database
   * @param {string} slug - The slug/document ID of the post to delete
   * @returns {Promise<boolean>} - Returns true on success, false on error
   */
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseID, // Database ID from config
        config.appwriteCollectionID, // Collection ID from config
        slug // Document ID to delete
      );

      return true; // Successful deletion
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
      return false; // Failed deletion
    }
  }

  /**
   * Retrieves a single post by its slug
   * @param {string} slug - The slug/document ID of the post to retrieve
   * @returns {Promise} - Returns the document object or false on error
   */
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseID, // Database ID from config
        config.appwriteCollectionID, // Collection ID from config
        slug // Document ID to retrieve
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
      return false; // Return false on error
    }
  }

  /**
   * Retrieves multiple posts with optional filtering
   * @param {Array} queries - Array of Appwrite Query objects for filtering
   * Default: Only returns posts with status "active"
   * @returns {Promise} - Returns list of documents or false on error
   */
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseID, // Database ID from config
        config.appwriteCollectionID, // Collection ID from config
        queries // Query filters (default: active posts only)
      );
    } catch (error) {
      console.log("Appwrite service :: getPostes :: error", error);
      return false; // Return false on error
    }
  }

  // FILE MANAGEMENT METHODS

  /**
   * Uploads a file to Appwrite storage
   * @param {File} file - The file object to upload
   * @returns {Promise} - Returns the uploaded file object or false on error
   */
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appwriteBucketID, // Storage bucket ID from config
        ID.unique(), // Generate unique file ID automatically
        file // File object to upload
      );
    } catch (error) {
      console.log("Appwrite service :: uplodeFile :: error", error);
      return false; // Return false on error
    }
  }

  /**
   * Deletes a file from Appwrite storage
   * @param {string} fileId - The ID of the file to delete
   * @returns {Promise<boolean>} - Returns true on success, false on error
   */
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(
        config.appwriteBucketID, // Storage bucket ID from config
        fileId // File ID to delete
      );
      return true; // Successful deletion
    } catch (error) {
      console.log("Appwrite sevice :: deleteFile :: error", error);
      return false; // Failed deletion
    }
  }

  /**
   * Gets a preview URL for a file (for images, PDFs, etc.)
   * This is a synchronous method that returns a URL immediately
   * @param {string} fileId - The ID of the file to preview
   * @returns {string} - Returns the preview URL
   */
  getFilePreview(fileId) {
    return this.storage.getFileView(
      config.appwriteBucketID, // Storage bucket ID from config
      fileId // File ID to generate preview for
    );
  }
}

// Create a singleton instance of the service for use throughout the application
// This ensures all parts of the app use the same configured service instance
const service = new Service();
export default service;
