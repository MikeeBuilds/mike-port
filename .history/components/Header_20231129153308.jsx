"use client";
import React, { useState, useEffect } from "react";

// components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div>
            {/* nav */}
            <Nav/>
            <ThemeToggler />
            {/* mobile nav */}
            <div>
              <Mo
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
