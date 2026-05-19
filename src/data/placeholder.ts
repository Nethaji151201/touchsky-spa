import {
  Cloud,
  Code2,
  Globe,
  Smartphone,
  Layers,
  Shield,
  Zap,
  BarChart3,
} from "lucide-react";
import type {
  FAQItem,
  HeroContent,
  ProductItem,
  ServiceItem,
  StatItem,
  TestimonialItem,
} from "@/types/content";

export const heroContent: HeroContent = {
  eyebrow: "Enterprise Software Solutions",
  title: "Build the future with",
  highlight: "premium digital products",
  subtitle:
    "We craft scalable web applications, mobile experiences, and cloud-native platforms that accelerate growth for ambitious enterprises.",
  primaryCta: { label: "Start a Project", href: "#contact" },
  secondaryCta: { label: "Explore Services", href: "#services" },
  highlights: [
    { label: "Enterprise clients", value: "150+" },
    { label: "Projects delivered", value: "12 yrs" },
    { label: "Satisfaction rate", value: "99%" },
  ],
};

export const services: ServiceItem[] = [
  {
    id: "web",
    title: "Web Development",
    description:
      "Responsive, performant web applications built with modern frameworks and best-in-class UX patterns.",
    icon: Globe,
  },
  {
    id: "software",
    title: "Software Development",
    description:
      "Custom enterprise software that streamlines operations, reduces costs, and scales with your business.",
    icon: Code2,
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
    icon: Smartphone,
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description:
      "Cloud-native architecture, migration, and DevOps pipelines for reliable, secure infrastructure.",
    icon: Cloud,
  },
];

export const products: ProductItem[] = [
  {
    id: "p1",
    title: "Enterprise Portal",
    description:
      "Unified dashboard for teams, analytics, and workflow automation.",
    tag: "Platform",
  },
  {
    id: "p2",
    title: "Commerce Suite",
    description:
      "Headless e-commerce with real-time inventory and payment integrations.",
    tag: "E-Commerce",
  },
  {
    id: "p3",
    title: "Analytics Hub",
    description:
      "Business intelligence with custom reports and data visualization.",
    tag: "Analytics",
  },
  {
    id: "p4",
    title: "Mobile Workforce",
    description:
      "Field service app with offline sync and GPS tracking capabilities.",
    tag: "Mobile",
  },
  {
    id: "p5",
    title: "Secure Gateway",
    description: "API management with OAuth, rate limiting, and audit logging.",
    tag: "Security",
  },
  {
    id: "p6",
    title: "Automation Engine",
    description: "No-code workflow builder for business process automation.",
    tag: "Automation",
  },
];

export const aboutStats: StatItem[] = [
  { id: "s1", value: "150+", label: "Projects Delivered" },
  { id: "s2", value: "50+", label: "Enterprise Clients" },
  { id: "s3", value: "12+", label: "Years Experience" },
  { id: "s4", value: "99%", label: "Client Satisfaction" },
];

export const aboutFeatures = [
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Built for growth with modular, maintainable codebases.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security practices at every layer.",
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description: "Agile sprints with continuous deployment pipelines.",
  },
  {
    icon: BarChart3,
    title: "Data Driven",
    description: "Analytics and insights baked into every solution.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: "t1",
    name: "Sarah Chen",
    role: "CTO",
    company: "NovaTech",
    content:
      "TouchSky transformed our legacy systems into a modern, cloud-native platform. The team exceeded every expectation.",
  },
  {
    id: "t2",
    name: "Marcus Williams",
    role: "VP Engineering",
    company: "ScaleFlow",
    content:
      "Outstanding craftsmanship and attention to detail. Our conversion rates improved 40% after the redesign.",
  },
  {
    id: "t3",
    name: "Elena Rodriguez",
    role: "Product Director",
    company: "FinEdge",
    content:
      "The most professional development partner we have worked with. Transparent, fast, and truly enterprise-grade.",
  },
  {
    id: "t4",
    name: "James Park",
    role: "CEO",
    company: "DataPulse",
    content:
      "From discovery to launch, the process was seamless. They understood our vision and delivered beyond it.",
  },
  {
    id: "t5",
    name: "Amira Hassan",
    role: "Head of Digital",
    company: "RetailPro",
    content:
      "Our mobile app launch was flawless. User engagement metrics have never been higher.",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "f1",
    question: "What industries do you specialize in?",
    answer:
      "We work across fintech, healthcare, retail, SaaS, and manufacturing — delivering tailored solutions for each sector's unique compliance and scalability requirements.",
  },
  {
    id: "f2",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary by scope. A MVP typically takes 8–12 weeks, while enterprise platforms may span 4–6 months. We provide detailed estimates after discovery.",
  },
  {
    id: "f3",
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes. We offer flexible support plans including SLA-backed maintenance, feature updates, security patches, and 24/7 monitoring options.",
  },
  {
    id: "f4",
    question: "What technologies do you use?",
    answer:
      "Our stack includes React, TypeScript, Node.js, cloud platforms (AWS, Azure, GCP), and modern mobile frameworks. We choose the best fit for each project.",
  },
  {
    id: "f5",
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. We integrate seamlessly with in-house teams via agile ceremonies, shared tooling, and clear communication channels.",
  },
  {
    id: "f6",
    question: "How do you handle project communication?",
    answer:
      "Weekly sprint reviews, dedicated Slack channels, and a client portal for real-time progress tracking keep you informed at every stage.",
  },
  {
    id: "f7",
    question: "What is your pricing model?",
    answer:
      "We offer fixed-price projects, time-and-materials, and dedicated team engagements. Pricing is transparent with no hidden fees.",
  },
  {
    id: "f8",
    question: "Do you sign NDAs and handle sensitive data?",
    answer:
      "Yes. We follow strict security protocols, sign NDAs before discovery, and comply with GDPR, SOC 2, and industry-specific regulations.",
  },
];
