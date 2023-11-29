"use client";

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button>
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all
      dark:rotate-90 dark:scale-0"/>
      <MoonIcon className="absolute"/>
    </Button>
  );
};

export default ThemeToggler;
