"use client"

import { motion } from "framer-motion";
// hooks
import useScrollProgress from "@/hooks/useScrollProgress";


const Template = ({ children }) => {
    const completion = useScrollProgress();
  return <>
            <motion.main>
                
            </motion.main>
        </>
}

export default Template