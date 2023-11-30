"use client";
import React, { useState, useEffect } from "react";

// components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div>
            {/* nav */}
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
