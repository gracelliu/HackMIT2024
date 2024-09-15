import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";
import { mutation } from "./_generated/server";

export const storeDataHttp = httpAction(async (ctx, request) => {
  var error = "e";
  try {
    const { accel, gyro, ECG } = await request.json();
    console.log("got it");
    await ctx.runMutation(api.storeData.storeData, { accel, gyro, ECG });
    // await ctx.runMutation(insetStuff, P{}).db.insert("sensorData", { accel, gyro, ECG });
  } catch (e) {
    error = e.toString();
    console.error("Error inserting data:", error);
  }
  return new Response(error, { status: 200 });
});

export const getData = httpAction(async (ctx, request) => {
  const data = await ctx.db.query("sensorData").collect(); // Retrieve data from the table
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});

export const storeHeartbeatHttp = httpAction(async (ctx, request) => {
  try {
    const { timestamp, bpm, context, timer_duration_seconds } =
      await request.json();
    console.log("Received heartbeat data:", {
      timestamp,
      bpm,
      context,
      timer_duration_seconds,
    });

    // Store the heartbeat data using a mutation
    await ctx.runMutation(api.storeHeartBeat, {
      timestamp,
      bpm,
      context,
      timer_duration_seconds: timer_duration_seconds || null,
    });

    // Return a successful response with CORS headers
    return new Response("Heartbeat data stored successfully", {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow any domain
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error storing heartbeat data:", error);
    return new Response(`Error: ${error.message}`, {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*", // Add CORS headers for error response
        "Content-Type": "application/json",
      },
    });
  }
});
