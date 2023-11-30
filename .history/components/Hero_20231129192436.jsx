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
        <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
          <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
            Software Developer
          </div>
          <h1 className="h1 mb-4">Hello, my name is Mike Ludlow</h1>
          <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
            Brief description with insights into myself, my vocational journey,
            and what I engage in profressionally
          </p>
          {/* buttons */}
          <div>
            <Link href='/contact'>
              <Button>
                Contact Me <Send size={}/>
              </Button>
            </Link>
          </div>
        </div>
        {/* image */}
        <div className="hidden xl:flex relative">image</div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
