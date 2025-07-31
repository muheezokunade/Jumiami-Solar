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
        content: "Jumiami Solar transformed our office operations completely. No more generator noise, no more fuel costs. The installation was professional and the system has been running flawlessly for 8 months now. Our electricity bills have reduced by 90%!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Funmi Adeyemi",
        title: "Restaurant Owner",
        company: "Green Leaf Restaurant",
        content: "The team at Jumiami Solar exceeded our expectations. From consultation to installation, everything was smooth. Our restaurant now runs on clean energy and our customers love the eco-friendly approach. The maintenance service is excellent!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Michael Okafor",
        title: "Homeowner",
        company: null,
        content: "Best investment I've made for my home. The solar system powers everything - AC, refrigerator, lights. The maintenance service is excellent and I'm saving thousands on electricity bills. Highly recommend Jumiami Solar!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Sarah Williams",
        title: "Business Owner",
        company: "Williams Fashion Store",
        content: "Jumiami Solar installed our solar system 2 years ago and it's been perfect. No breakdowns, excellent customer service, and our business has never experienced power outages since. The ROI was achieved within 18 months!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "David Okonkwo",
        title: "Property Developer",
        company: "Okonkwo Properties",
        content: "We've used Jumiami Solar for multiple residential projects. Their quality is consistent, installation is timely, and their after-sales support is outstanding. Our clients are always satisfied with the solar installations.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Grace Eze",
        title: "School Principal",
        company: "Bright Future Academy",
        content: "Our school's solar installation by Jumiami Solar has been a game-changer. We now have reliable power for our computer labs and air conditioning. The students love learning about renewable energy too!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Chukwudi Nwankwo",
        title: "Hospital Administrator",
        company: "Life Care Hospital",
        content: "Critical medical equipment needs reliable power. Jumiami Solar delivered a robust system that ensures our hospital never loses power. Their backup systems are excellent and maintenance is prompt.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1559839734-2e71fb77ad47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Aisha Bello",
        title: "Hotel Manager",
        company: "Royal Palm Hotel",
        content: "Our hotel's solar installation by Jumiami Solar has significantly reduced our operational costs. Guests appreciate our commitment to sustainability, and the system has been running perfectly for over a year.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Emeka Okechukwu",
        title: "Factory Owner",
        company: "Okechukwu Manufacturing",
        content: "Our factory's solar system from Jumiami Solar powers our entire production line. The installation was completed without disrupting our operations, and the energy savings are substantial. Excellent service!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Kemi Adebayo",
        title: "Pharmacy Owner",
        company: "HealthFirst Pharmacy",
        content: "As a pharmacy, we need reliable power for our refrigerators and medical equipment. Jumiami Solar provided a robust system that ensures our medicines stay safe and our business never stops. Outstanding service!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1559839734-2e71fb77ad47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Rasheed Ahmed",
        title: "Tailoring Shop Owner",
        company: "Perfect Stitch Tailoring",
        content: "My tailoring shop's solar system powers all my sewing machines, irons, and lighting. No more interruptions during work hours. The installation was professional and the system works flawlessly.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Victoria Okonkwo",
        title: "Bakery Owner",
        company: "Sweet Dreams Bakery",
        content: "Our bakery's solar system powers all our ovens, mixers, and refrigeration units. No more power cuts affecting our production. The system has been running perfectly for over a year and our customers love our fresh bread!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Emmanuel Eze",
        title: "Barbershop Owner",
        company: "Gentlemen's Cuts",
        content: "My barbershop's solar installation has been excellent! No more power cuts during haircuts, and my clients appreciate the consistent service. The system powers all my equipment including clippers and air conditioning.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Aisha Yusuf",
        title: "Nursery School Owner",
        company: "Little Stars Nursery",
        content: "Our nursery school's solar system ensures our children have reliable lighting and air conditioning. The parents appreciate our commitment to clean energy and the kids love learning about solar power through our educational programs.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Chinedu Okechukwu",
        title: "Auto Repair Shop Owner",
        company: "Precision Auto Care",
        content: "Our auto repair shop's solar system powers all our diagnostic equipment, air compressors, and lighting. No more power cuts affecting our work. The system has been running perfectly and our customers appreciate the reliable service.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Zainab Bello",
        title: "Hair Salon Owner",
        company: "Glamour Hair Studio",
        content: "My hair salon's solar installation has been fantastic! No more power cuts during appointments, and my clients love the consistent service. The system powers all my equipment including hair dryers, straighteners, and air conditioning.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Oluwaseun Adesanya",
        title: "Bank Manager",
        company: "First Trust Bank",
        content: "Our bank branches now run on solar power thanks to Jumiami Solar. The security systems, ATMs, and air conditioning all work perfectly. Our customers appreciate the stable power supply.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Fatima Hassan",
        title: "Beauty Salon Owner",
        company: "Glamour Beauty Salon",
        content: "My salon's solar installation has been amazing! No more power cuts during appointments, and my clients love the eco-friendly approach. The system powers all my equipment including hair dryers and air conditioning.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Tunde Balogun",
        title: "Church Pastor",
        company: "Grace Community Church",
        content: "Our church's solar system from Jumiami Solar has been a blessing. We can now hold services without worrying about power cuts, and our community outreach programs have reliable electricity.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Ngozi Okoro",
        title: "Daycare Owner",
        company: "Little Angels Daycare",
        content: "Our daycare's solar installation ensures our children are comfortable with reliable air conditioning and lighting. The parents appreciate our commitment to clean energy and the kids love learning about solar power!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Yusuf Ibrahim",
        title: "Mosque Imam",
        company: "Central Mosque",
        content: "Our mosque's solar system provides reliable power for our daily prayers and community events. Jumiami Solar's installation was respectful of our religious practices and the system works perfectly.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Chioma Eze",
        title: "Boutique Owner",
        company: "Elegance Boutique",
        content: "My boutique's solar system has been fantastic! No more power cuts during business hours, and my customers love shopping in a well-lit, air-conditioned environment. The installation was quick and professional.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Adebayo Lawal",
        title: "Gym Owner",
        company: "FitLife Gym",
        content: "Our gym's solar installation powers all our equipment, air conditioning, and lighting. Our members appreciate the consistent power supply during workouts. Jumiami Solar delivered excellent service!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Hajara Mohammed",
        title: "Catering Business Owner",
        company: "Royal Catering Services",
        content: "Our catering business relies on reliable power for our kitchen equipment. Jumiami Solar's system ensures we never lose power during events. The backup system is excellent and maintenance is prompt.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Oluwafemi Adebayo",
        title: "Car Wash Owner",
        company: "Sparkle Car Wash",
        content: "Our car wash business now runs entirely on solar power. The water pumps, lighting, and air compressors all work perfectly. Our customers appreciate the eco-friendly approach and we save significantly on electricity.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Blessing Okechukwu",
        title: "Internet Cafe Owner",
        company: "CyberNet Cafe",
        content: "Our internet cafe's solar system powers all our computers, air conditioning, and security systems. No more downtime during power cuts. Our customers love the reliable service and we've seen increased business.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Rasheed Ahmed",
        title: "Tailoring Shop Owner",
        company: "Perfect Stitch Tailoring",
        content: "My tailoring shop's solar system powers all my sewing machines, irons, and lighting. No more interruptions during work hours. The installation was professional and the system works flawlessly.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Victoria Okonkwo",
        title: "Bakery Owner",
        company: "Sweet Dreams Bakery",
        content: "Our bakery's solar system powers all our ovens, mixers, and refrigeration units. No more power cuts affecting our production. The system has been running perfectly for over a year and our customers love our fresh bread!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Emmanuel Eze",
        title: "Barbershop Owner",
        company: "Gentlemen's Cuts",
        content: "My barbershop's solar installation has been excellent! No more power cuts during haircuts, and my clients appreciate the consistent service. The system powers all my equipment including clippers and air conditioning.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Aisha Yusuf",
        title: "Nursery School Owner",
        company: "Little Stars Nursery",
        content: "Our nursery school's solar system ensures our children have reliable lighting and air conditioning. The parents appreciate our commitment to clean energy and the kids love learning about solar power through our educational programs.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Chinedu Okechukwu",
        title: "Auto Repair Shop Owner",
        company: "Precision Auto Care",
        content: "Our auto repair shop's solar system powers all our diagnostic equipment, air compressors, and lighting. No more power cuts affecting our work. The system has been running perfectly and our customers appreciate the reliable service.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Zainab Bello",
        title: "Hair Salon Owner",
        company: "Glamour Hair Studio",
        content: "My hair salon's solar installation has been fantastic! No more power cuts during appointments, and my clients love the consistent service. The system powers all my equipment including hair dryers, straighteners, and air conditioning.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
      },
      {
        name: "Kemi Adebayo",
        title: "Pharmacy Owner",
        company: "HealthFirst Pharmacy",
        content: "As a pharmacy, we need reliable power for our refrigerators and medical equipment. Jumiami Solar provided a robust system that ensures our medicines stay safe and our business never stops. Outstanding service!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1559839734-2e71fb77ad47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80"
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
      createdAt: new Date(),
      company: insertTestimonial.company ?? null,
      rating: insertTestimonial.rating ?? 5,
      imageUrl: insertTestimonial.imageUrl ?? null
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
      createdAt: new Date(),
      imageUrl: insertProject.imageUrl ?? null,
      capacity: insertProject.capacity ?? null,
      equipment: insertProject.equipment ?? null,
      completedAt: insertProject.completedAt ?? null
    };
    this.projects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();
