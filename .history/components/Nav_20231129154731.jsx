import Link from "next/link"

const links = [
    {path: '/', name: 'Home'},
    {path: '/projects', name: 'My Projects'},
    {path: '/contact', name: 'Contact'}
]


const Nav = ({containerStyles, linkStyles, underlineStyles}) => {
  return   <nav className={`${containerStyles}`}>
    {links.map((link, index) => {
        return <Link href={link.path} key={index} className="">{link.name}</Link>
    })}
  </nav>

}

export default Nav