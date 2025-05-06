import type { Express } from "express";
import express from "express";
import path from "path";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from the public and attached_assets directories
  app.use('/assets', express.static(path.join(process.cwd(), 'public/assets')));
  app.use('/attached_assets', express.static(path.join(process.cwd(), 'attached_assets')));
  
  // API prefix
  const apiPrefix = "/api";

  // Get all products
  app.get(`${apiPrefix}/products`, async (req, res) => {
    try {
      const products = await storage.getAllProducts();
      return res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get product by ID
  app.get(`${apiPrefix}/products/:id`, async (req, res) => {
    try {
      const product = await storage.getProductById(parseInt(req.params.id));
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get products by type (export/import)
  app.get(`${apiPrefix}/products/type/:type`, async (req, res) => {
    try {
      const { type } = req.params;
      if (!['export', 'import'].includes(type)) {
        return res.status(400).json({ message: "Invalid product type. Must be 'export' or 'import'" });
      }
      
      const products = await storage.getProductsByType(type);
      return res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products by type:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all testimonials
  app.get(`${apiPrefix}/testimonials`, async (req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      return res.status(200).json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Submit contact form
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const newMessage = await storage.insertContactMessage(validatedData);
      
      return res.status(201).json({
        message: "Message received successfully",
        id: newMessage.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Error submitting contact form:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get contact messages (admin only - would need auth middleware)
  app.get(`${apiPrefix}/contact-messages`, async (req, res) => {
    try {
      // In a real app, this would check authentication
      // if (!req.user?.isAdmin) return res.status(403).json({ message: "Unauthorized" });
      
      const messages = await storage.getAllContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
