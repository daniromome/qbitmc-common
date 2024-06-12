export interface Document {
  /**
         * Document ID.
         */
  $id: string;
  /**
   * Collection ID.
   */
  $collectionId: string;
  /**
   * Database ID.
   */
  $databaseId: string;
  /**
   * Document creation date in ISO 8601 format.
   */
  $createdAt: string;
  /**
   * Document update date in ISO 8601 format.
   */
  $updatedAt: string;
  /**
   * Document permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
   */
  $permissions: string[];
}