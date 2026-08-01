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
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8">

                        {navLinks.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-center gap-1 font-medium text-[#1E293B] hover:text-[#19A463] transition"
                            >
                                {item.title}

                                {item.dropdown && (
                                    <ChevronDown size={16} />
                                )}
                            </Link>
                        ))}

                    </nav>

                    {/* Right */}
                    <div className="hidden lg:flex items-center gap-5">

                        <div className="flex items-center gap-3">

                            <div className="w-12 h-12 rounded-full bg-[#EAF8EF] flex items-center justify-center">
                                <PhoneCall
                                    size={22}
                                    className="text-[#19A463]"
                                />
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Call Anytime
                                </p>

                                <a
                                    href="tel:+12545678900"
                                    className="font-semibold"
                                >
                                    +1 (254) 567-8900
                                </a>
                            </div>

                        </div>

                        <button className="bg-[#19A463] hover:bg-[#14894f] text-white px-7 h-12 rounded-full font-semibold transition">
                            Get a Quote
                        </button>

                    </div>

                    {/* Mobile Button */}

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden"
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
                className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[500px]" : "max-h-0"
                    }`}
            >
                <div className="border-t">

                    <nav className="flex flex-col p-5">

                        {navLinks.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="py-3 border-b flex justify-between"
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
                                        size={20}
                                        className="text-[#19A463]"
                                    />
                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Call Anytime
                                    </p>

                                    <p className="font-semibold">
                                        +1 (254) 567-8900
                                    </p>

                                </div>

                            </div>

                            <button className="w-full h-12 rounded-full bg-[#19A463] text-white font-semibold">
                                Get a Quote
                            </button>

                        </div>

                    </nav>

                </div>

            </div>

        </header>
    );
}