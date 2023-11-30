import Link from "next/link";
import { Download, Send } from "lucide-react";
import { Button } from "./ui/button";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="flex justify-between gap-x-8">
        {/* text */}
        <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-32 text-center xl:text-left">
          <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
            Software Developer
          </div>
          <h1 className="h1 mb-4">Hello, Im Mike Ludlow</h1>
          <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
            Brief description with insights into myself, my vocational journey,
            and what I engage in profressionally
          </p>
          {/* buttons */}
          <div
            className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto 
          xl:mx-0 mb-12"
          >
            <Link href="/contact">
              <Button className="gap-x-2">
                Contact Me <Send size={15} />
              </Button> 
            </Link>
            <Button variant="secondary" className="gap-x-2">
              Download CV <Download size={18} /> <Send size={15} />
            </Button>
          </div>
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
            iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
          />
        </div>
        {/* image */}
        <div className="hidden xl:flex relative right-24">
          <Badge icon={<RiBriefcase4Fill/>} endCountNum={}/>
          <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-8"></div>
          <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom" imgSrc='/hero/developer.png'/>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
