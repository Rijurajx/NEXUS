import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Chats Table
  chats: defineTable({
    title: v.string(),
    userId: v.string(),
    createdAt: v.number(),
  }).index("by_user", ["userId"]),

  // Messages Table
  messages: defineTable({
    chatId: v.id("chats"),
    content: v.string(),
    role: v.union(v.literal("user"), v.literal("assistant")),
    createdAt: v.number(),
  }).index("by_chat", ["chatId"]),

  // Contact Form Submissions Table
  contacts: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phoneNumber: v.optional(v.string()), // Optional
    message: v.string(),
    createdAt: v.number(),
  }).index("by_email", ["email"]),
});
