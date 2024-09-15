import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const storeData = mutation({
  args: {
    accel: v.number(),
    gyro: v.number(),
    ECG: v.number(),
  },
  handler: async (ctx, { accel, gyro, ECG }) => {
    await ctx.db.insert("sensorData", { accel, gyro, ECG });
  },
});

export const storeHeartBeat = mutation({
  args: {
    timestamp: v.string(),
    bpm: v.number(),
    context: v.number(),
    timer_duration_seconds: v.optional(v.number()),
  },
  handler: async (
    { db },
    { timestamp, bpm, context, timer_duration_seconds }
  ) => {
    await db.insert("heartRateData", {
      timestamp,
      bpm,
      context,
      timer_duration_seconds,
    });
  },
});
