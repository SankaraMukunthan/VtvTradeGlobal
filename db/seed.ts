import { db } from "./index";
import * as schema from "@shared/schema";
import { eq } from "drizzle-orm";

async function seed() {
  try {
    // Check if products already exist to avoid duplicates
    const existingProducts = await db.query.products.findMany();
    
    if (existingProducts.length === 0) {
      console.log("Seeding products...");
      
      // Export Products
      const exportProducts = [
        {
          name: "Premium Turmeric",
          description: "High-curcumin, organically grown turmeric from the fertile soils of Southern India.",
          type: "export",
          category: "spices",
          imageUrl: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
          slug: "premium-turmeric",
          featured: true
        },
        {
          name: "Aromatic Basmati Rice",
          description: "Long-grain, aromatic basmati rice from the foothills of the Himalayas.",
          type: "export",
          category: "rice",
          imageUrl: "https://images.unsplash.com/photo-1550828520-4cb496926fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
          slug: "aromatic-basmati-rice",
          featured: true
        },
        {
          name: "Organic Spices",
          description: "A diverse range of authentic Indian spices including cardamom, cloves, and cinnamon.",
          type: "export",
          category: "spices",
          imageUrl: "https://images.unsplash.com/photo-1596359900106-7918e73e1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
          slug: "organic-spices",
          featured: true
        },
        {
          name: "Premium Pulses",
          description: "High-protein lentils, chickpeas, and a variety of beans from different growing regions.",
          type: "export",
          category: "pulses",
          imageUrl: "https://images.unsplash.com/photo-1523916421519-98d99e188c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
          slug: "premium-pulses",
          featured: false
        },
        {
          name: "Assorted Nuts",
          description: "A selection of cashews, almonds, and other premium nuts grown in ideal conditions.",
          type: "export",
          category: "nuts",
          imageUrl: "https://images.unsplash.com/photo-1599707345883-60c34cc3d6af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
          slug: "assorted-nuts",
          featured: false
        },
        {
          name: "Fresh Produce",
          description: "Seasonal fruits and vegetables carefully selected for export markets.",
          type: "export",
          category: "fresh-produce",
          imageUrl: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
          slug: "fresh-produce",
          featured: false
        }
      ];
      
      // Import Products
      const importProducts = [
        {
          name: "Gum Damar",
          description: "High-quality resin used in various industries including food, pharmaceuticals, and cosmetics.",
          type: "import",
          category: "resins",
          imageUrl: "https://images.unsplash.com/photo-1603143285586-6381819de2e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
          slug: "gum-damar",
          featured: true
        }
      ];
      
      // Insert export products
      for (const product of exportProducts) {
        await db.insert(schema.products).values(product);
      }
      
      // Insert import products
      for (const product of importProducts) {
        await db.insert(schema.products).values(product);
      }
      
      console.log("Products seeded successfully");
    } else {
      console.log("Products already exist, skipping seed");
    }
    
    // Check if testimonials already exist to avoid duplicates
    const existingTestimonials = await db.query.testimonials.findMany();
    
    if (existingTestimonials.length === 0) {
      console.log("Seeding testimonials...");
      
      const testimonials = [
        {
          name: "John Doering",
          title: "Procurement Manager, European Spice Imports",
          quote: "VTV Enterprises has been our trusted supplier of premium turmeric for over 5 years. Their quality is consistently excellent, and their logistics support makes international sourcing seamless.",
          initials: "JD"
        },
        {
          name: "Rajesh Patel",
          title: "Director, Mumbai Pharmaceuticals",
          quote: "We appreciate VTV's commitment to quality and reliability. Their documentation expertise and compliance knowledge have made importing Gum Damar into India a smooth process for our business.",
          initials: "RP"
        },
        {
          name: "Sarah Lee",
          title: "Executive Chef, Asian Culinary Group",
          quote: "The premium quality of Indian rice supplied by VTV Enterprises has helped our restaurant chain maintain its reputation for authentic flavors. Their service is as exceptional as their products.",
          initials: "SL"
        }
      ];
      
      // Insert testimonials
      for (const testimonial of testimonials) {
        await db.insert(schema.testimonials).values(testimonial);
      }
      
      console.log("Testimonials seeded successfully");
    } else {
      console.log("Testimonials already exist, skipping seed");
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
