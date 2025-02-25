import newPortfolioPage from "@/assets/images/portfolio_page.png";
import comingSoonPage from "@/assets/images/coming-soon-page.png";
import javaEcomGithubPage from "@/assets/images/java-ecom-github2025.png";
import angularEcomFePage from "@/assets/images/ecom-fe-page.png";

const portfolioSourceCode =
  "https://github.com/JuliaThTranNguyen/portfolio_2025";

const portfolioTechStack = ["Next.js", "TailwindCSS", "React", "TypeScript"];
const portfolioDeploymentInfo = [
  "Deployed on Vercel",
  "Code maintained on GitHub",
];
const portfolioLiveDemo =
  "https://thjulia-tran-hien-portfolio-2025.vercel.app/";

const ecomBeSourceCode =
  "https://github.com/JuliaThTranNguyen/java-ecom-backend2025";

const ecomBeTechStack = [
  "Java",
  "Spring boot",
  "Spring Securiy",
  "MySQL",
  "Stripe API",
];
const ecomBeDeploymentInfo = [
  "Hosted on AWS/Google Cloud",
  "Code maintained on GitHub",
  "Payment processing powered by Stripe API",
];

const ecomFeSourceCode =
  "https://github.com/JuliaThTranNguyen/ecom-Fe-Angular-2025";

const ecomFeTechStack = ["Angular 19", "TailwindCSS", "MySQL", "Stripe API"];
const ecomFeDeploymentInfo = [
  "Hosted on Vercel",
  "Code maintained on GitHub",
  "Safe & secure checkout with Stripe",
];

const upcomingLiveDemo =
  "https://i.pinimg.com/736x/79/cd/bd/79cdbd490251e750e5afce048532dec0.jpg";

const advancedProjects = [
  {
    company: "Personal Project",
    year: "2/2025",
    title: "Web Portfolio 2025",
    results: [
      "Enhanced user experience by 25%",
      "Improved site speed by 50%",
      "Involved lovely UI/UX Design by 42%",
    ],
    techs: portfolioTechStack,
    mains: portfolioDeploymentInfo,
    demo: portfolioLiveDemo,
    github: portfolioSourceCode,
    image: newPortfolioPage,
  },
  {
    company: "Work in Progress: Inventory Management System",
    year: "11/2024 - 2/2025",
    title: "Helsinki Freelance: E-Commerce Project",
    results: [
      "Enhanced secure payment by 50%",
      "Improved site speed & data traffic by 25%",
      "Dynamic Product Filters & Search by 40%",
    ],
    techs: ecomBeTechStack,
    mains: ecomBeDeploymentInfo,
    demo: upcomingLiveDemo,
    github: ecomBeSourceCode,
    image: javaEcomGithubPage,
  },
  {
    company: "Work in Progress: E-Commerce Web App",
    year: "11/2024 - 2/2025",
    title: "Helsinki Freelance: E-Commerce Project",
    results: [
      "Enhanced user experience by 40%",
      "Secure user data & order tracking by 50%",
      "Improved site speed & data traffic by 25%",
      "Increased new brand awareness by 20%",
    ],
    techs: ecomFeTechStack,
    mains: ecomFeDeploymentInfo,
    demo: upcomingLiveDemo,
    github: ecomFeSourceCode,
    image: angularEcomFePage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      "Enhanced user experience by 40%",
      "Improved site speed by 50%",
      "Increased mobile traffic by 35%",
    ],
    techs: portfolioTechStack,
    mains: portfolioDeploymentInfo,
    demo: upcomingLiveDemo,
    github: upcomingLiveDemo,
    image: comingSoonPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light SaaS Landing Page",
    results: [
      "Boosted sales by 20%",
      "Expanded customer reach by 35%",
      "Increased brand awareness by 15%",
    ],
    techs: portfolioTechStack,
    mains: portfolioDeploymentInfo,
    demo: upcomingLiveDemo,
    github: upcomingLiveDemo,
    image: comingSoonPage,
  },
];

export default advancedProjects;
