"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Menu,
    X,
    ChevronDown,
    PhoneCall,
} from "lucide-react";

const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Pages", href: "#", dropdown: true },
    { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/logo/newlogo.png"
                            alt="Logo"
                            width={180}
                            height={60}
                            priority
                            className="object-contain"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
                        {navLinks.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`flex items-center gap-1 font-bold text-[15px] xl:text-base transition-colors relative group
                                    ${item.title === 'Home' ? 'text-[#1FA463]' : 'text-[#0D2235] hover:text-[#1FA463]'}
                                `}
                            >
                                {item.title}

                                {item.dropdown && (
                                    <ChevronDown size={16} className={`transition-colors ${item.title === 'Home' ? 'text-[#1FA463]' : 'text-[#0D2235] group-hover:text-[#1FA463]'}`} />
                                )}

                                {item.title === 'Home' && (
                                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#1FA463]"></span>
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Right */}
                    <div className="hidden lg:flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-[#EAF8EF] flex items-center justify-center shrink-0">
                                <PhoneCall
                                    size={20}
                                    className="text-[#1FA463]"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-[13px] text-gray-500 font-semibold leading-tight mb-0.5">
                                    Call Anytime
                                </p>
                                <a
                                    href="tel:+12545678900"
                                    className="font-extrabold text-[#0D2235] text-[15px] leading-tight"
                                >
                                    +1 (254) 567-8900
                                </a>
                            </div>
                        </div>

                        <button className="bg-[#1FA463] hover:bg-[#18804d] text-white px-7 py-3 rounded-full font-bold text-[15px] transition-colors shadow-sm">
                            Get a Quote
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-[#0D2235]"
                    >
                        {menuOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[500px]" : "max-h-0"}`}
            >
                <div className="border-t border-gray-100 bg-white">
                    <nav className="flex flex-col p-5">
                        {navLinks.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`py-3 border-b border-gray-100 flex justify-between font-bold text-[15px]
                                    ${item.title === 'Home' ? 'text-[#1FA463]' : 'text-[#0D2235]'}
                                `}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.title}

                                {item.dropdown && (
                                    <ChevronDown size={18} />
                                )}
                            </Link>
                        ))}

                        <div className="mt-6">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-full bg-[#EAF8EF] flex items-center justify-center">
                                    <PhoneCall
                                        size={18}
                                        className="text-[#1FA463]"
                                    />
                                </div>
                                <div>
                                    <p className="text-[13px] text-gray-500 font-semibold">
                                        Call Anytime
                                    </p>
                                    <p className="font-extrabold text-[#0D2235] text-[15px]">
                                        +1 (254) 567-8900
                                    </p>
                                </div>
                            </div>
                            <button className="w-full h-12 rounded-full bg-[#1FA463] hover:bg-[#18804d] text-white font-bold text-[15px] transition-colors">
                                Get a Quote
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}