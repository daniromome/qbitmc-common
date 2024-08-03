import { Databases, Models, Query } from 'https://deno.land/x/appwrite@11.0.0/mod.ts'
export async function getAllDocuments<T extends Models.Document>(
  databases: Databases,
  databaseId: string,
  collectionId: string,
  queries: string[] = []
): Promise<T[]> {
  const limit = 100;
  let allDocuments: T[] = [];
  let lastId: string | undefined = undefined;

  while (true) {
    const currentQueries = [...queries, Query.limit(limit)];
    if (lastId) {
      currentQueries.push(Query.cursorAfter(lastId));
    }

    const response = await databases.listDocuments<T>(
      databaseId,
      collectionId,
      currentQueries
    );

    allDocuments = allDocuments.concat(response.documents);

    if (response.documents.length < limit) {
      break;
    }

    lastId = response.documents[response.documents.length - 1].$id;
  }

  return allDocuments;
}