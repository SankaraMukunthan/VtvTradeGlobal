import { db } from "@db";
import * as schema from "@shared/schema";
import { eq } from "drizzle-orm";

export const storage = {
  // Products
  getAllProducts: async () => {
    return await db.query.products.findMany({
      orderBy: (products, { desc }) => [desc(products.createdAt)]
    });
  },

  getProductById: async (id: number) => {
    return await db.query.products.findFirst({
      where: eq(schema.products.id, id)
    });
  },

  getProductsByType: async (type: string) => {
    return await db.query.products.findMany({
      where: eq(schema.products.type, type),
      orderBy: (products, { desc }) => [desc(products.createdAt)]
    });
  },

  getFeaturedProducts: async () => {
    return await db.query.products.findMany({
      where: eq(schema.products.featured, true),
      orderBy: (products, { desc }) => [desc(products.createdAt)]
    });
  },

  insertProduct: async (productData: schema.InsertProduct) => {
    const result = await db.insert(schema.products).values(productData).returning();
    return result[0];
  },

  // Testimonials
  getAllTestimonials: async () => {
    return await db.query.testimonials.findMany({
      orderBy: (testimonials, { desc }) => [desc(testimonials.createdAt)]
    });
  },

  insertTestimonial: async (testimonialData: schema.InsertTestimonial) => {
    const result = await db.insert(schema.testimonials).values(testimonialData).returning();
    return result[0];
  },

  // Contact Messages
  getAllContactMessages: async () => {
    return await db.query.contactMessages.findMany({
      orderBy: (messages, { desc }) => [desc(messages.createdAt)]
    });
  },

  getContactMessageById: async (id: number) => {
    return await db.query.contactMessages.findFirst({
      where: eq(schema.contactMessages.id, id)
    });
  },

  insertContactMessage: async (messageData: schema.ContactFormValues) => {
    const result = await db.insert(schema.contactMessages).values(messageData).returning();
    return result[0];
  },

  updateContactMessageStatus: async (id: number, status: string) => {
    const result = await db.update(schema.contactMessages)
      .set({ status })
      .where(eq(schema.contactMessages.id, id))
      .returning();
    return result[0];
  }
};
