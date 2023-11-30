import Link from 'next/link';
import { Download, Send } from 'lucide-react';
import { Button } from './ui/button';


import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from 'react-icons/ri';

//components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';


const Hero = () => {
  return (
    <section>
        <div>
            {/* text */}
            <div>text</div>
            {/* image */}
            <div>image</div>
            {/* icon */}
            <div className='hidden md:flex absolute'>
                <RiArrowDownSLine className='text-3xl text-primary'/>
            </div>
        </div>
    </section>
  )
}

export default Hero