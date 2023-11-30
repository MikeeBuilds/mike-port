"use client"
import React, {useState, useEffect} from 'react'


// components
import  Logo  from "./Logo"
import ThemeToggler from './ThemeToggler'

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        

        <ThemeToggler />
      </div>
    </header>
  )
}

export default Header