import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  interest: z.string().min(1, { message: "Please select your interest." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: "",
      message: "",
    },
  });

  // Initialize EmailJS with Vite environment variables
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");

  const sendEmail = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: "abiindo3333@gmail.com",
          from_name: data.name,
          from_email: data.email,
          company: data.company,
          interest: getInterestLabel(data.interest),
          message: data.message,
        },
        publicKey
      );
      
      // Log successful submission
      console.log("Contact form submitted:", data);
      
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };

  const getInterestLabel = (value: string): string => {
    const options: Record<string, string> = {
      "export": "Exporting Products from India",
      "import": "Importing Products to India",
      "both": "Both Import & Export",
      "other": "Other Inquiry"
    };
    return options[value] || value;
  };

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      
      // Send the email via EmailJS
      const success = await sendEmail(data);
      
      if (success) {
        // Show success message and reset form
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We will get back to you shortly.",
          variant: "default",
        });
        form.reset();
      }
    } catch (error) {
      // Show error message
      toast({
        title: "Failed to send message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">Your Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full px-4 py-3 border border-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">Email Address</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Company Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full px-4 py-3 border border-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">I'm interested in:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="Please select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="export">Exporting Products from India</SelectItem>
                  <SelectItem value="import">Importing Products to India</SelectItem>
                  <SelectItem value="both">Both Import & Export</SelectItem>
                  <SelectItem value="other">Other Inquiry</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Your Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-md transition duration-300"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
