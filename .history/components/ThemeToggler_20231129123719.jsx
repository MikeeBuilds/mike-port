"use client"

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui-react-icons";

const ThemeToggler = () => {
    const { useTheme, setTheme } = useTheme();
  return (
    <Button>
        <SunIcon/>
        <MoonIcon/>
    </Button>
  )
}

export default ThemeToggler