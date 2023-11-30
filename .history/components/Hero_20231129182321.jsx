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
        <div>
          <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[]">Software Developer</div>
          <h1 className="h1">Hello, my name is Mike Ludlow</h1>
          <p>
            Brief description with insights into myself, my vocational journey
            and what I engage in profressionally
          </p>
        </div>
        {/* image */}
        <div>image</div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
