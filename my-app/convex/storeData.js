import { mutation } from "./_generated/server";
import { v } from "convex/values"; // Import the Convex validator

export const storeData = mutation({
  args: {
    jsonData: v.object({
      // Define the structure of your JSON data
      key1: v.number(),
      key2: v.number(),
      key3: v.number(),
    }),
  },
  handler: async ({ db }, { jsonData }) => {
    await db.insert("data", jsonData);
  },
});
