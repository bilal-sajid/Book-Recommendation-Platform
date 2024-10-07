import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

// React Icons
import {FaBlog} from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)

    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100){
                setIsSticky(true)
            }
            else{
                setIsSticky(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    },[])


    // Navigation Items
    const navItems = [
        {link:"Home", path:"/"},
        {link:"About", path:"/about"},
        {link:"Shop", path:"/shop"},
        {link:"Sell Your Book", path:"/admin/dashboard"},
        {link:"Blog", path:"/blog"},
    ]
  return (
    <header>
        <nav>
            <div>
                {/* {Logo} */}
                <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'><FaBlog className='inline-block'/>Books</Link>

                {/* {Navigation Items (Large Device)} */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => (
                        <Link key = {path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{
                            link}
                        </Link>))
                    }
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar