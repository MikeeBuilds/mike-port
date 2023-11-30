import Link from "next/link"

const links = [
    {path: '/', name: 'Home'},
    {path: '/projects', name: 'My projects'},
    {path: '/contact', name: 'contact'}
]


const Nav = ({containerStyles, linkStyles, underlineStyles}) => {
  return   <nav className={`${containerStyles}`}>
    {links.map((link, index) => {
        return <Link href={link.path}>{link.name}</Link>
    })}
  </nav>

}

export default Nav