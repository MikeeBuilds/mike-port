"use client"

import { motion } from "framer-motion";
// hooks
import useScrollProgress from "@/hooks/useScrollProgress";


//variants
const variants = {
    hidden: {opacity: 0 },
    enter: { opacity: 0 },
};

const Template = ({ children }) => {
    const completion = useScrollProgress();
  return <>
            <motion.main 
                variants={variants} 
                initial='hidden' animate='enter'>
                {children}
            </motion.main>
        </>
}

export default Template