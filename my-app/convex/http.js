import { httpRouter } from "convex/server";
import { storeDataHttp, getData, storeHeartbeatHttp } from "./myHttpActions";

const http = httpRouter();

http.route({
  path: "/storeData",
  method: "POST",
  handler: storeDataHttp,
});

http.route({
  path: "/getData", // Add a GET route to retrieve data
  method: "GET",
  handler: getData,
});

http.route({
  path: "/storeHeartbeat", // Define the endpoint for storing heartbeat data
  method: "POST",
  handler: storeHeartbeatHttp, // Handle the POST request for heartbeat data
});

// Handle preflight requests (OPTIONS)
http.route({
  path: "/storeHeartbeat",
  method: "OPTIONS",
  handler: async () => {
    return new Response(null, {
      status: 204, // No content
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all domains
        "Access-Control-Allow-Methods": "POST, OPTIONS", // Allow POST and OPTIONS methods
        "Access-Control-Allow-Headers": "Content-Type", // Allow specific headers
      },
    });
  },
});

export default http;
