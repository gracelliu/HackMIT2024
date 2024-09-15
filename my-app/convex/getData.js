// Convex backend function to fetch data
export default async function getData() {
    const data = await db.table("storeData").collect();
    return data;
  }