import DevImg from "./DevImg";
import image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Mike Ludlow",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "(614)772-9779",
  },
  {
    icon: <MailIcon size={20} />,
    text: "MLudlow000@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born On May 14, 1986",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelors In Software Engineering",
  },
  {
    icon: <HomeIcon sizes={20}/>,
    text: 'Columbus, OH'
  }
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Columbus State Community College',
        qualification: 'Bachelor Of Science',
        years: '2019-2024'
      },
      {
        university: 'Learn Web3',
        qualification: 'Ethereum Developer Degree',
        years: '2022-2023'
      },
      {
        university: 'Alchemy University',
        qualification: 'Learn Javascript',
        years: '2023'
      },
    ]
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Takify AI Startup',
        qualification: 'Software Developer',
        years: '2022-present'
      },
      // {
      //   company: 'Takify AI Startup',
      //   qualification: 'Software Developer',
      //   years: '2022-present'
      // },
      // {
      //   company: 'Takify AI Startup',
      //   qualification: 'Software Developer',
      //   years: '2022-present'
      // },
    ]
  }
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS',
      },
      {
        name: 'Front-end Development',
      },
      {
        name: 'Javascript, PHP',
      },
      {
        name: 'Back-end Development'
      }
    ]
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
      {
        imgPath: '/about/wordpress.svg',
      },
    ]
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  };


  return (
    <section className="xl:">
    <div className="container mx-auto">
      <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
    </div>
  </section>
  );
};

export default About;
