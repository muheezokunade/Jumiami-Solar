import { type User, type InsertUser, type Contact, type InsertContact, type Testimonial, type InsertTestimonial, type Project, type InsertProject } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private testimonials: Map<string, Testimonial>;
  private projects: Map<string, Project>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.testimonials = new Map();
    this.projects = new Map();
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Sample testimonials
    const testimonialData: InsertTestimonial[] = [
      {
        name: "Adebayo Johnson",
        title: "CEO",
        company: "TechVision Ltd",
        content: "Jumiami Solar transformed our office operations completely. No more generator noise, no more fuel costs. The installation was professional and the system has been running flawlessly for 8 months now.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
      },
      {
        name: "Funmi Adeyemi",
        title: "Restaurant Owner",
        company: "Green Leaf Restaurant",
        content: "The team at Jumiami Solar exceeded our expectations. From consultation to installation, everything was smooth. Our restaurant now runs on clean energy and our customers love the eco-friendly approach.",
        rating: 5,
        imageUrl: "https://pixabay.com/get/g4527fbe5b7c931b9418bd90523cbb689b09e156c2be32c68af304dfe3651249a5445003ee870f6a52431316a7912e7c6d1aef4a8e6df8a00f1249d16d6a6369e_1280.jpg"
      },
      {
        name: "Michael Okafor",
        title: "Homeowner",
        company: "",
        content: "Best investment I've made for my home. The solar system powers everything - AC, refrigerator, lights. The maintenance service is excellent and I'm saving thousands on electricity bills.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
      }
    ];

    testimonialData.forEach(testimonial => {
      this.createTestimonial(testimonial);
    });

    // Sample projects
    const projectData: InsertProject[] = [
      {
        title: "MRS Company Installation",
        description: "Complete solar solution featuring our premium 14.4 kW solar panels, 22 kW lithium battery system, and 12 kVA inverter.",
        clientName: "MRS Company",
        projectType: "Commercial",
        capacity: "14.4 kW",
        equipment: ["14.4 kW Panels", "22 kW Battery", "12 kVA Inverter"],
        imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
        completedAt: new Date('2023-06-15')
      },
      {
        title: "Easy-Transact Solutions",
        description: "High-capacity installation with 270 kW lithium battery system and 108 kVA inverter for uninterrupted business operations.",
        clientName: "Easy-Transact",
        projectType: "Commercial",
        capacity: "270 kW",
        equipment: ["270 kW Battery", "108 kVA Inverter", "Commercial Grade Panels"],
        imageUrl: "https://pixabay.com/get/ga2e7c6486285811d1416c8f475b1289beeec0b2137b258744ae4613927d660f4f7bb2a0c924221105ec67dbc211830d7835bb9154864121aba19e4c7a367b4fc_1280.jpg",
        completedAt: new Date('2023-08-20')
      },
      {
        title: "JBNL Residential",
        description: "Custom residential solar solution with advanced monitoring and premium components for maximum efficiency.",
        clientName: "JBNL",
        projectType: "Residential",
        capacity: "12 kW",
        equipment: ["Smart Monitoring", "Premium Panels", "Hybrid Inverter"],
        imageUrl: "https://pixabay.com/get/gb9f45e527e55dc4c9790baa07b5d660ca00736eed1cf6fe6e71e794c785f55f01af133f84523844391f029c77494ae3d449f80062e71fcf597e979939f547dce_1280.jpg",
        completedAt: new Date('2023-09-10')
      }
    ];

    projectData.forEach(project => {
      this.createProject(project);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id, 
      createdAt: new Date() 
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = { 
      ...insertProject, 
      id, 
      createdAt: new Date() 
    };
    this.projects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();
