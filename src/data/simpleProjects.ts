import comingSoonPage from "@/assets/images/coming-soon-page.png";
import shobiePage from "@/assets/images/shobie-page.png";
import travelPage from "@/assets/images/travel-page.png";

import { StaticImageData } from "next/image";

export interface SimpleProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveDemoLink?: string;
  sourceCode?: string;
  image: StaticImageData;
}

const TECH_STACKS = {
  shobie: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
  travel: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
  weather: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
};

const simpleProjects: SimpleProject[] = [
  {
    id: 1,
    title: "UI: Shobie Store",
    description:
      "This is a simple UI App using Next.js & TailwindCss for development.",
    technologies: TECH_STACKS.shobie,
    liveDemoLink: "https://ux-ui-shobie.vercel.app/",
    sourceCode: "https://github.com/JuliaThTranNguyen/UX-UI_Shobie",
    image: shobiePage,
  },
  {
    id: 2,
    title: "UI: Travel Agency",
    description:
      "This is a simple UI App using Next.js & TailwindCss for development.",
    technologies: TECH_STACKS.travel,
    liveDemoLink: "https://travel-agency-ecru.vercel.app/",
    sourceCode: "https://github.com/JuliaThTranNguyen/travel_agency",
    image: travelPage,
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "This is a fully reactive weather app using Next.js & TailwindCss for development.",
    technologies: TECH_STACKS.travel,
    liveDemoLink:
      "https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg",
    sourceCode: "https://github.com/JuliaThTranNguyen",
    image: comingSoonPage,
  },
];

export default simpleProjects;
