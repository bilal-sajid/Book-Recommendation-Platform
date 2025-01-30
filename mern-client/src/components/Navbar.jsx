import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

// React Icons
import { FaBars, FaXmark, FaReadme } from "react-icons/fa6";
import { AuthContext } from '../contexts/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const { user } = useContext(AuthContext);

    // Toggle Menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Navigation Items
    const navItems = [
        { link: "Home", path: "/" },
        { link: "Recommendations", path: "/all-recommendations" },
        { link: "Recommend a Book", path: "/admin/dashboard" },
    ];

    return (
        <header className="w-full fixed top-0 left-0 right-0 transition-all duration-300 z-50">
            <nav className={`py-4 lg:px-20 px-6 transition-all duration-300 ${isSticky ? "bg-white shadow-md" : "bg-transparent"}`}>
                <div className="flex justify-between items-center text-lg">
                    
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-semibold text-orange-700 flex items-center gap-2">
                        <FaReadme className="inline-block text-orange-500" />
                        BookWaves
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="md:flex space-x-8 hidden">
                        {navItems.map(({ link, path }) => (
                            <Link key={path} to={path} className="text-gray-800 hover:text-orange-600 transition-all uppercase">
                                {link}
                            </Link>
                        ))}
                    </ul>

                    {/* Right Section - User & Menu Icon */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {user && <span className="text-gray-700">{user.email}</span>}
                        <button>
                            <FaBars className="w-6 text-gray-800 hover:text-orange-600 transition-all" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                            {isMenuOpen ? <FaXmark className="h-6 w-6 text-gray-800" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                <div className={`absolute w-full left-0 top-16 bg-orange-100 py-6 px-6 transform transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                    {navItems.map(({ link, path }) => (
                        <Link key={path} to={path} className="block text-gray-800 text-lg py-2 uppercase">
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
