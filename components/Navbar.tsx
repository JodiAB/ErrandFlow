import Image from 'next/image'
import Link from 'next/link'


const NavBar = () => {
  return (
    <header>
        
        <nav>
            <Link href='/' className='logo'>
            <Image src="/public/icons/logo.png" alt="logo" width={24} height={24}/>
            <p>ErrandFlow</p>
            </Link>

            <ul>
              <Link href="/">Home</Link>
              <Link href="/">Planner</Link>
              <Link href="/">Tasks</Link>
              <Link href="/">Map View</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </ul>
        </nav>
        
        </header>
  )
}

export default NavBar