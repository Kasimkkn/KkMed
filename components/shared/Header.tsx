"use client";
import React, { useState } from "react";
import { HomeIcon, SearchIcon, ShoppingCartIcon, LayoutGridIcon, MenuIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { NavLink } from "@/types/Types";

export const navLinks: NavLink[] = [
    {
        name: "Home",
        href: "/home",
        icon: <HomeIcon className="w-6 h-6" />,
    },
    {
        name: "Search",
        href: "/search",
        icon: <SearchIcon className="w-6 h-6" />,
    },
    {
        name: "Cart",
        href: "/cart",
        icon: <ShoppingCartIcon className="w-6 h-6" />,
    },
    {
        name: "More",
        href: "/more",
        icon: <LayoutGridIcon className="w-6 h-6" />,
    },
];

const Header: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>(navLinks[0].href);
    const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);

    return (
        <>
            {/* Header for laptop screens */}
            <nav className="flex flex-col max-[900px]:hidden bg-olive text-white p-3">
                <div className="flex items-center justify-between mx-3">
                    <div className="flex items-center justify-center">
                        <div className="text-2xl font-bold">Kk<span className="text-lightgreen">MEd</span></div>
                    </div>

                    {/* Search Bar */}
                    <div className="w-2/5">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-full bg-white text-black"
                                placeholder="What are you looking for?..."
                            />
                            <SearchIcon className="absolute right-2 top-2 w-6 h-6 text-gray-400" />
                        </div>
                    </div>

                    {/* Icons (User Profile, Cart) */}
                    <div className="flex items-center space-x-6">
                        <UserIcon className="w-6 h-6" />
                        <ShoppingCartIcon className="w-6 h-6" />
                    </div>
                </div>

                <div className="flex justify-between  mx-3 pt-3">
                    <ul className="flex justify-center gap-4 ">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>
                                    <span
                                        className={`flex items-center space-x-2 p-2 rounded-lg transition-colors text-gray-500 dark:text-gray-800 duration-200 ${activeLink === link.href
                                            ? "border-b-lightgreen border-b dark:border-b-black dark:text-white"
                                            : " hover:border-b-lightgreen hover:border-b dark:hover:border-b-black dark:hover:text-white"
                                            }`}
                                        onClick={() => setActiveLink(link.href)}
                                    >
                                        {link.icon}
                                        <h6>{link.name}</h6>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between items-center gap-8 text-gray-400">
                        <p>Phone: +123-456789</p>
                        <p>Email: company@domain.com</p>
                        <p>ABC Avenue</p>
                    </div>
                </div>
            </nav>

            {/* Sidebar for tablet screens */}
            <aside
                className={`fixed z-10 h-screen hidden max-[900px]:flex max-[440px]:hidden flex-col bg-olive dark:bg-white p-4 transition-all duration-300 ${isSidebarExpanded ? "w-40" : "w-16"
                    }`}
            >
                <button
                    onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                    className="flex justify-center items-center mb-4 text-gray-500 dark:text-gray-800 hover:text-white dark:hover:text-black"
                >
                    <MenuIcon className="w-6 h-6" />
                </button>
                <ul className="space-y-4">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>
                                <span
                                    className={`flex items-center space-x-2 px-2 py-1 rounded-lg transition-colors duration-200 text-gray-500 dark:text-gray-800 ${activeLink === link.href
                                        ? "border-b-lightgreen border-b dark:border-b-black dark:text-white"
                                        : "hover:border-b-lightgreen hover:border-b dark:hover:border-b-black dark:hover:text-white"
                                        }`}
                                    onClick={() => setActiveLink(link.href)}
                                >
                                    {link.icon}
                                    {isSidebarExpanded && <h6>{link.name}</h6>}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Bottom navigation for mobile screens */}
            <nav className="hidden max-[440px]:block fixed bottom-0 inset-x-0 bg-olive dark:bg-white p-1" style={{ borderRadius: "1.5rem 1.5rem 0 0" }}>
                <ul className="flex justify-around">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>
                                <span
                                    className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-200 text-gray-500 dark:text-gray-800    ${activeLink === link.href
                                        ? "border-b-lightgreen border-b dark:border-b-black dark:text-white"
                                        : " hover:border-b-lightgreen hover:border-b dark:hover:border-b-black dark:hover:text-white"
                                        }`}
                                    onClick={() => setActiveLink(link.href)}
                                >
                                    {link.icon}
                                    <h6 className="text-xs">{link.name}</h6>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Header;
