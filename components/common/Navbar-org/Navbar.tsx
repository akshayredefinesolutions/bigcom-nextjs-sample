import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'

interface Link {
  href: string
  label: string
}
interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <div className="topbarmsg">
      <div className="topbarmsgleft"></div>  
      <div className="topbarmsgright">USD</div>
    </div>
    <Container>
      <div className={s.nav}>
        <div className="flex items-center flex-1">
          <Link href="/">
            <a className={s.logocustom} aria-label="Logo">
              <Logo />
            </a>
          </Link>
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="justify-center flex-1 hidden lg:flex">
            <Searchbar />
          </div>
        )}
        <div className="flex items-center justify-end flex-1 space-x-8">
          <UserNav />
        </div>
      </div>
      <div className="flex pb-4 lg:px-6 lg:hidden">
        <Searchbar id="mobile-search" />
      </div>
      <div className={s.mainmenudiv}>
        <nav className={s.navMenu}>
            <Link href="/search">
              <a className={s.link}>All</a>
            </Link>
            {links?.map((l) => (
              <Link href={l.href} key={l.href}>
                <a className={s.link}>{l.label}</a>
              </Link>
            ))}
          </nav>
      </div>
    </Container>
  </NavbarRoot>


  
)

export default Navbar
