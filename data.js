import { Instagram, Linkedin, Mail, Twitter, Phone } from "lucide-react";
import { Home, Briefcase, Code, Send } from "lucide-react";
import BlogProjectPage from "./layout/ProjectDetails/blog";
import KadickProjectPage from "./layout/ProjectDetails/kadick";
import PortfolioProjectPage from "./layout/ProjectDetails/portfolio";
import RecipeRadarProjectPage from "./layout/ProjectDetails/reciperadar";

export const NavData = [
  {
    label: "Home",
    href: "/#home",
    icon: <Home />,
  },
  {
    label: "ToolKit",
    href: "/#toolkit",
    icon: <Briefcase />,
  },
  {
    label: "Projects",
    href: "/#projects",
    icon: <Code />,
  },
  {
    label: "about Me",
    href: "/#aboutme",
    icon: <Send />,
  },
  {
    label: "Contact",
    href: "/#contact",
    icon: <Mail />,
  },
];

export const MyProjects = [
  {
    id: "1",
    name: "Kadick Integrated Limited",
    info: "Agency Banking Website",
    img: "/kadick.png",
    content: <KadickProjectPage />,
    link: "https://frontend-official-website-acb2a866bd2d.herokuapp.com/",
  },
  {
    id: "2",
    name: "Blog App",
    info: "A Blog Application ",
    img: "/blog.png",
    content: <BlogProjectPage />,
    link: "https://blog-app-omega-virid.vercel.app/",
  },
  {
    id: "3",
    name: "Portfolio",
    info: "A portfolio Template",
    img: "/portfolio.png",
    content: <PortfolioProjectPage />,
    link: "https://portfolio-app-brown-six.vercel.app/",
  },
  {
    id: "4",
    name: "Recipe Radar",
    info: "A Recipe Finder",
    img: "/reciperadar.png",
    content: <RecipeRadarProjectPage />,
    link: "https://recipe-radar-9hry.vercel.app/",
  },
];

export const Experience = [
  {
    location: "Lagos , Nigeria",
    occupation: "Kadick Integrated Limited",
    date: "April 2025 – Present",
    position: "Web Developer Intern",
    works: [
      "Assisted in the design and development of client websites under the guidance of senior designers.",
      "Maintained and updated existing websites, ensuring they met modern web standards.",
      "Participated in client meetings to gather requirements and present design proposals.",
      "Developed basic HTML and CSS coding skills to support design projects.",
    ],
  },
  {
    location: "Lagos , Nigeria",
    occupation: "Speak Out Africa",
    date: "Jan 2019 – Present",
    position: "Web Developer",
    works: [
      "Assisted in the design and development of client websites under the guidance of senior designers.",
      "Maintained and updated existing websites, ensuring they met modern web standards.",
      "Participated in client meetings to gather requirements and present design proposals.",
      "Developed basic HTML and CSS coding skills to support design projects.",
    ],
  },
];

export const Education = [
  {
    location: "Anambra state , Nigeria",
    course: "Nnamdi Azikiwe University",
    date: "May 2023 - Present",
    uni: "Computer Science",
    goal: "Focused on advanced web technologies, user experience design, and front-end development.",
  },
  {
    location: "Anambra state , Nigeria",
    course: "Marist Comprehensive College",
    date: "Jan  2006 - Mar 2008",
    uni: "Master of Science in Web Design and Development",
    goal: "Focused on advanced web technologies, user experience design, and front-end development.",
  },
];


export const Socials = [
  {
    social: "Email",
    links: [
      {
        info: "ebukacharles006@gmail.com",
        icon: <Mail />,
        href: "mailto:ebukacharles006@gmail.com",
      },
    ],
  },
  {
    social: "Phone",
    links: [
      {
        info: "0811-220-5847",
        icon: <Phone />,
        href: "tel:+2348112205847",
      },
    ],
  },
  {
    social: "Socials",
    links: [
      {
        info: "Twitter",
        icon: <Twitter />,
        href: "https://x.com/bigw1z?s=21",
      },
      {
        info: "Instagram",
        icon: <Instagram />,
        href: "https://www.instagram.com/_____random_jpg/profilecard/?igsh=MXJnamZ2bHl5eXhldQ==",
      },
      {
        info: "LinkedIn",
        icon: <Linkedin />,
        href: "https://www.linkedin.com/in/chukwuebuka-onuora-67b4b4274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    ],
  },
];

export const Stack = [
  {
    name: "React",
    link: "https://react.dev",
    img: "/react.svg",
    fill: "#61DAFB",
    image: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
    ),
  },
  {
    name: "Next.js",
    link: "https://nextjs.org",
    img: "/react.svg",
    image: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
    ),
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com",
    img: "/react.svg",
    image: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        className="w-full h-full"
      />
    ),
  },
  {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: "/react.svg",
    image: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
    ),
  },
  {
    name: "Git",
    link: "https://git-scm.com",
    img: "/react.svg",
    image: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        className="w-full h-full"
      />
    ),
  },
  {
    name: "GitHub",
    link: "https://github.com",
    img: "/react.svg",
    image: (
      <>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          className="w-full h-full block dark:hidden"
          alt="github light "
        />
        <img
          src="/github.jpg"
          className="w-full h-full hidden dark:block"
          alt="github dark "
        />
      </>
    ),
  },
  {
    name: "Postman",
    link: "https://www.postman.com",
    img: "/react.svg",
    image: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
        className="w-full h-full"
      />
    ),
  },
  {
    name: "Vercel",
    link: "https://vercel.com",
    img: "/react.svg",
    image: (
      <>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
          className="w-full h-full block dark:hidden"
          alt="Vercel Light"
        />
        <img
          src="/vercel.png"
          className="w-full h-full hidden dark:block"
          alt="Vercel Dark"
        />
      </>
    ),
  },
];



