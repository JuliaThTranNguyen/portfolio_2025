import newPortfolioPage from "@/assets/images/portfolio_page.png";
import comingSoonPage from "@/assets/images/coming-soon-page.png";
import javaEcomGithubPage from "@/assets/images/java-ecom-github2025.png";
import angularEcomFePage from "@/assets/images/ecom-fe-page.png";
import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  company: string;
  year: string;
  title: string;
  results: string[];
  technologies: string[];
  deploymentInfo: string[];
  liveDemoLink: string;
  sourceCode: string;
  image: StaticImageData;
}

const TECH_STACKS = {
  portfolio: ["Next.js", "TailwindCSS", "React", "TypeScript"],
  ecomBe: ["Java", "Spring Boot", "Spring Security", "MySQL", "Stripe API"],
  ecomFe: ["Angular 19", "TailwindCSS", "MySQL", "Stripe API"],
};

const DEPLOYMENT_INFO = {
  portfolio: ["Deployed on Vercel", "Code maintained on GitHub"],
  ecomBe: [
    "Hosted on AWS/Google Cloud",
    "Payment processing powered by Stripe API",
  ],
  ecomFe: ["Hosted on Vercel", "Safe & secure checkout with Stripe"],
};

const advancedProjects: Project[] = [
  {
    id: 1,
    company: "Personal Project",
    year: "2/2025",
    title: "Web Portfolio 2025",
    results: [
      "Enhanced user experience by 25%",
      "Improved site speed by 50%",
      "Lovely UI/UX Design by 42%",
    ],
    technologies: TECH_STACKS.portfolio,
    deploymentInfo: DEPLOYMENT_INFO.portfolio,
    liveDemoLink: "https://thjulia-tran-hien-portfolio-2025.vercel.app/",
    sourceCode: "https://github.com/JuliaThTranNguyen/portfolio_2025",
    image: newPortfolioPage,
  },
  {
    id: 2,
    company: "Helsinki Freelance",
    year: "11/2024 - 2/2025",
    title: "E-Commerce Backend",
    results: [
      "Enhanced secure payment by 50%",
      "Improved data traffic by 25%",
      "Dynamic Product Filters by 40%",
    ],
    technologies: TECH_STACKS.ecomBe,
    deploymentInfo: DEPLOYMENT_INFO.ecomBe,
    liveDemoLink: "https://example.com/ecom-demo",
    sourceCode: "https://github.com/JuliaThTranNguyen/java-ecom-backend2025",
    image: javaEcomGithubPage,
  },
  {
    id: 3,
    company: "Helsinki Freelance",
    year: "11/2024 - 2/2025",
    title: "E-Commerce Frontend",
    results: [
      "Enhanced UX by 40%",
      "Secure order tracking by 50%",
      "Improved site speed by 25%",
    ],
    technologies: TECH_STACKS.ecomFe,
    deploymentInfo: DEPLOYMENT_INFO.ecomFe,
    liveDemoLink: "https://example.com/ecom-fe-demo",
    sourceCode: "https://github.com/JuliaThTranNguyen/ecom-Fe-Angular-2025",
    image: angularEcomFePage,
  },
  {
    id: 4,
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      "Enhanced UX by 40%",
      "Improved site speed by 50%",
      "Increased mobile traffic by 35%",
    ],
    technologies: TECH_STACKS.portfolio,
    deploymentInfo: DEPLOYMENT_INFO.portfolio,
    liveDemoLink: "https://example.com/ai-startup-demo",
    sourceCode: "https://example.com/ai-startup-code",
    image: comingSoonPage,
  },
];

export default advancedProjects;
