'use client'

import {
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterFill,
  RiInstagramFill
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: '/',
    name: <RiLinkedinFill />,
  },
  {
    path: '/',
    name: <RiGithubFill />,
  },{
    path: '/',
    name: <RiTwitterFill />,
  },{
    path: '/',
    name: <RiInstagramFill />,
  },
]


import React from "react";

const Socials = ({ containerStyles, iconSty}) => {
  return <div>Socials</div>;
};

export default Socials;
