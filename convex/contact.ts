import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Mutation to send user messages to Convex database
export const sendContact = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phoneNumber: v.optional(v.string()), // Optional phone number
    message: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("contacts", {
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      phoneNumber: args.phoneNumber || "",
      message: args.message,
      createdAt: Date.now(),
    });
  },
});
