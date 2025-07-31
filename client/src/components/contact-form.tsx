import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";

export default function ContactForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your interest! We will contact you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit contact form. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="glass-morphism rounded-2xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-white">Get Your Free Consultation</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder="Your full name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[hsl(19,100%,58%)]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      type="tel"
                      placeholder="+234 xxx xxx xxxx"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[hsl(19,100%,58%)]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email Address</FormLabel>
                <FormControl>
                  <Input 
                    {...field}
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[hsl(19,100%,58%)]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Property Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-[hsl(19,100%,58%)]">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
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
                <FormLabel className="text-white">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    {...field}
                    rows={4}
                    placeholder="Tell us about your energy needs..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[hsl(19,100%,58%)]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            disabled={contactMutation.isPending}
            className="w-full bg-gradient-to-r from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] text-white py-4 font-semibold hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)] transition-all duration-300 transform hover:scale-105"
          >
            {contactMutation.isPending ? "Submitting..." : "Get Free Consultation"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
