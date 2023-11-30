import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div>
          <div>
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
            <Socials containerStyles='flex gap-x-4'/>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
