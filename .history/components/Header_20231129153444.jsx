"use client";
import React, { useState, useEffect } from "react";

// components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex">
            {/* nav */}
            <Nav/>
            <ThemeToggler />
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
