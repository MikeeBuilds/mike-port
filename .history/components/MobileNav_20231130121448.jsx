import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = () => {
  return <Sheet>
          <SheetTrigger asChild>
            <AlignJustify className="curso"/>
          </SheetTrigger>
        </Sheet>
};

export default MobileNav;
