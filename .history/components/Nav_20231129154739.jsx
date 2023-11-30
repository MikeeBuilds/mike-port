import Link from "next/link"

const links = [
    {path: '/', name: 'home'},
    {path: '/projects', name: 'my Projects'},
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