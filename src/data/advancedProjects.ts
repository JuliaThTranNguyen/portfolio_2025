import newPortfolioPage from "@/assets/images/portfolio_page.png";
import comingSoonPage from "@/assets/images/coming-soon-page.png";
import saasDrkProjectPage from "@/assets/images/dark-saas-landing-page.png";
import saasLghtProjectPage from "@/assets/images/light-saas-landing-page.png";

// Define reusable constants
const placeholderImageURL =
  "https://cdni.iconscout.com/illustration/premium/thumb/coming-soon-banner-illustration-download-in-svg-png-gif-file-formats--new-logo-advert-miscellaneous-illustrations-3373565.png";

const portfolioSourceCode =
  "https://github.com/JuliaThTranNguyen/portfolio_2025";

// Reusable tech stack and deployment info
const techStack = ["Next.js", "TailwindCSS", "React", "TypeScript"];
const deploymentInfo = ["Deployed on Vercel", "Code maintained on GitHub"];

const advancedProjects = [
  {
    company: "Personal Project",
    year: "2022",
    title: "Web Portfolio 2025",
    results: [
      "Enhanced user experience by 25%",
      "Improved site speed by 50%",
      "Involved lovely UI/UX Design by 42%",
    ],
    techs: techStack,
    mains: deploymentInfo,
    link: portfolioSourceCode,
    image: newPortfolioPage,
  },
  {
    company: "Banking landing page",
    year: "2025",
    title: "Vaasa Startup Landing Page",
    results: [
      "Enhanced user experience by 55%",
      "Improved site speed & data traffic by 25%",
      "Increased new user awareness by 30%",
    ],
    techs: techStack,
    mains: deploymentInfo,
    link: placeholderImageURL,
    image: saasDrkProjectPage,
  },
  {
    company: "New landing page",
    year: "2024",
    title: "Vaasa Startup Landing Page",
    results: [
      "Enhanced user experience by 40%",
      "Improved site speed by 30%",
      "Increased new brand awareness by 20%",
    ],
    techs: techStack,
    mains: deploymentInfo,
    link: placeholderImageURL,
    image: saasLghtProjectPage,
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
    techs: techStack,
    mains: deploymentInfo,
    link: placeholderImageURL,
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
    techs: techStack,
    mains: deploymentInfo,
    link: placeholderImageURL,
    image: comingSoonPage,
  },
];

export default advancedProjects;
