'use client'

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';


const NavBar = () => {

 
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // To avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
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

             <ul className="flex flex-row items-center gap-6">
          <li>
            <button
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-muted transition"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-sky-600" />
              )}
            </button>
          </li>
        </ul>
        </nav>
        
        </header>
  )
}

export default NavBar