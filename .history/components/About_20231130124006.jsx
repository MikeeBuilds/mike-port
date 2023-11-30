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
    icon: <User2 size={20} />,
    text: "Mike Ludlow",
  },
];

const About = () => {
  return <div>About</div>;
};

export default About;
