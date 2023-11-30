"use client"

import { motion } from "framer-motion";
// hooks
import useScrollProgress from "@/hooks/useScrollProgress";


//variants
const variants

const Template = ({ children }) => {
    const completion = useScrollProgress();
  return <>
            <motion.main>
                {children}
            </motion.main>
        </>
}

export default Template