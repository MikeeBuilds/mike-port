import Link from "next/link"

const links = [
    {path: '/', name: 'home'},
    {path: '/projects', name: 'my projects'},
    {path: '/contact', name: 'contact'}
]


const Nav = ({containerStyles, linkStyles, underlineStyles}) => {
  return   <nav className={`${containerStyles}`}>
    {links.map((link, index) => {
        return <Link></Link>
    })}
  </nav>

}

export default Nav