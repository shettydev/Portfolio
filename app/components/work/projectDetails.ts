import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiZig,
    SiNodedotjs,
    SiNodered
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "React Flow Craft",
        description:
            "ReactFlowCraft is a open-source versatile full-stack workflow project enabling users to effortlessly design custom workflows using pre-built or personalized nodes.",
        technologies: [SiTypescript, SiReact, SiNodedotjs, SiTailwindcss, SiNodered],
        techNames: ["TypeScript", "React", "Node.js", "Tailwind CSS", "ReactFlow"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/shettydev/ReactFlowCraft",
        demo: "https://reactflowchart-1.netlify.app/",
        image: "/projects/reactflowcraft.png",
        available: true,
    },
    {
        id: 1,
        name: "VR MALL",
        description:
            "Developed an virtual mall by using Three.js and Typescript..",
        technologies: [SiWebgl,SiTypescript, SiReact],
        techNames: ["WebGL", "Typescript", "React"],
        techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
        github: "https://github.com/karthikmudunuri/VRMALL",
        demo: "https://vrmalldemo.netlify.app/",
        image: "/projects/vrmall.png",
        available: true,
    },
];
