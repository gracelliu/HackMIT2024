import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  sensorData: defineTable({
    accel: v.number(),
    gyro: v.number(),
    ECG: v.number(),
  }),

  heartRateData: defineTable({
    timestamp: v.string(),
    bpm: v.number(),
    context: v.number(),
    timer_duration_seconds: v.optional(v.number()), // Make it optional since it can be null
  }),
});
