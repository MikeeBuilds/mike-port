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
    text: "May 14, 1986",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelors In Software Engineering",
  },
  {
    icon: <HomeIcon sizes={20} />,
    text: "Columbus, OH",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Columbus State Community College",
        qualification: "Bachelor Of Science",
        years: "2019-2024",
      },
      {
        university: "Learn Web3",
        qualification: "Ethereum Developer Degree",
        years: "2022-2023",
      },
      {
        university: "Alchemy University",
        qualification: "Learn Javascript",
        years: "2023",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Takify AI Startup",
        qualification: "Software Developer",
        years: "2022-present",
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
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript, PHP",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* iamge */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt:12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for over 10 years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites and
                      applications with cutting-edge technology, delivering
                      dynamic and engaging use experience.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">
                        Fluent Languages
                      </div>
                      <div className="border-b border-border"></div>
                      <div>English, Spanish</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <div className="">
                  <h3 className="h3 mb-8 text-center xl:text-left">My Journey</h3>
                  {/* experience & education wrapper */}
                  <div>
                    {/* experience */}
                    <div>
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <Briefcase/>
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, 'experience').title}
                        </h4>
                      </div>
                      {/* list */}
                      <div>
                        {getData(qualificationData, 'experience').data.map((item, index) => {
                          const {company, role, years} = item;
                          return (
                            <div key={index}>{company} </div>
                          )
                        })}
                      </div>
                    </div>
                    {/* education */}
                    <div>Education</div>
                  </div>
                </div>
                <TabsContent value="qualifications">
                  qualifications info
                </TabsContent>
                <TabsContent value="skills">skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
