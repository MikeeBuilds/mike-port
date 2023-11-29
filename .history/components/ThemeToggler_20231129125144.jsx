"use client";

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button>
      <SunIcon className="h-[1.2rem]"/>
      <MoonIcon />
    </Button>
  );
};

export default ThemeToggler;
