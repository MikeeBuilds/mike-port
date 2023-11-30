import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link href={link.path} key={index}>
          <div className={`capitalize ${linkStyles}`}>
            <motion.div layoutId="underline" className={`${underlineStyles}`}>
              {link.path === path && (
                <motion.span
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  transition={{ type: "tween" }}
                />
              )}
            </motion.div>
            {link.name}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
