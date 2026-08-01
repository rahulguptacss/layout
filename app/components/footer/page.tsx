"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FaFacebookF as Facebook,
    FaLinkedinIn as Linkedin,
    FaTwitter as Twitter,
    FaInstagram as Instagram,
} from "react-icons/fa";

import {
    MapPin,
    Mail,
    Phone,
    ChevronRight,
} from "lucide-react";

const links = [
    "About",
    "Our Services",
    "Our Team",
    "Our Blog",
    "Contact",
];

import { Send } from "lucide-react";


export default function Footer() {
    return (
        <footer className="bg-[#262626] text-white pt-20">

            <div className="max-w-[1320px] mx-auto px-5 lg:px-8">

                {/* Footer Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* ================= COLUMN 1 ================= */}

                    <div>

                        {/* Logo */}

                        <Link href="/">
                            <Image
                                src="/logo/whitelogo.png"
                                alt="CleanPro"
                                width={180}
                                height={60}
                                priority
                            />
                        </Link>

                        {/* Description */}

                        <p className="text-[#C8C8C8] leading-8 mt-8">
                            Lorem ipsum dolor sit amet, consectetur elit eiusmod tempor
                            incididunt labore dolore magna aliqua consectetur adipiscing elit.
                        </p>

                        {/* Social */}

                        <div className="mt-8">

                            <h4 className="font-semibold text-lg">
                                Follow Us :
                            </h4>

                            <div className="flex items-center gap-4 mt-5">

                                <a
                                    href="#"
                                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#23A36D] hover:bg-[#23A36D] hover:text-white transition"
                                >
                                    <Facebook size={18} />
                                </a>

                                <a
                                    href="#"
                                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#23A36D] hover:bg-[#23A36D] hover:text-white transition"
                                >
                                    <Linkedin size={18} />
                                </a>

                                <a
                                    href="#"
                                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#23A36D] hover:bg-[#23A36D] hover:text-white transition"
                                >
                                    <Twitter size={18} />
                                </a>

                                <a
                                    href="#"
                                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#23A36D] hover:bg-[#23A36D] hover:text-white transition"
                                >
                                    <Instagram size={18} />
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* ================= COLUMN 2 ================= */}

                    <div>

                        <h3 className="text-[28px] font-bold">
                            Get In Touch
                        </h3>

                        <div className="w-14 h-[3px] bg-[#22A46D] mt-3 mb-8"></div>

                        {/* Address */}

                        <div className="flex gap-4 mb-8">

                            <MapPin
                                size={22}
                                className="text-[#22A46D] mt-1 shrink-0"
                            />

                            <div>

                                <h5 className="font-semibold text-lg">
                                    Location:
                                </h5>

                                <p className="text-[#C8C8C8] mt-2 leading-7">
                                    2976 Sunrise Avenue,
                                    <br />
                                    Las Vegas
                                </p>

                            </div>

                        </div>

                        {/* Email */}

                        <div className="flex gap-4 mb-8">

                            <Mail
                                size={22}
                                className="text-[#22A46D] mt-1 shrink-0"
                            />

                            <div>

                                <h5 className="font-semibold text-lg">
                                    Email:
                                </h5>

                                <a
                                    href="mailto:hello@anwa.com"
                                    className="text-[#C8C8C8] mt-2 block hover:text-[#22A46D] transition"
                                >
                                    hello@anwa.com
                                </a>

                            </div>

                        </div>

                        {/* Phone */}

                        <div className="flex gap-4">

                            <Phone
                                size={22}
                                className="text-[#22A46D] mt-1 shrink-0"
                            />

                            <div>

                                <h5 className="font-semibold text-lg">
                                    Phone:
                                </h5>

                                <a
                                    href="tel:+13454567877"
                                    className="text-[#C8C8C8] mt-2 block hover:text-[#22A46D] transition"
                                >
                                    +1-3454-5678-77
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* ================= COLUMN 3 ================= */}

                    <div>

                        <h3 className="text-[28px] font-bold">
                            Quick Links
                        </h3>

                        <div className="w-14 h-[3px] bg-[#22A46D] mt-3 mb-8"></div>

                        <ul className="space-y-5">

                            {links.map((item) => (

                                <li key={item}>

                                    <a
                                        href="#"
                                        className="flex items-center gap-3 text-[#C8C8C8] hover:text-[#22A46D] transition"
                                    >

                                        <ChevronRight size={18} />

                                        <span className="text-lg">
                                            {item}
                                        </span>

                                    </a>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* ================= COLUMN 4 ================= */}

                    <div>

                        <h3 className="text-[28px] font-bold text-white">
                            Subscribe
                        </h3>

                        <div className="w-14 h-[3px] bg-[#22A46D] mt-3 mb-8"></div>

                        <p className="text-[#C8C8C8] leading-8 mb-8">
                            Subscribe To Our Newsletter To Get
                            Our Update News!
                        </p>

                        {/* Email */}

                        <div className="relative">

                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full h-[58px] rounded-full px-6 pr-14 outline-none text-[#333] bg-white"
                            />

                            <Send
                                size={18}
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-[#22A46D]"
                            />

                        </div>

                        {/* Button */}

                        <button
                            className="
      mt-6
      w-full
      h-[56px]
      rounded-full
      bg-[#22A46D]
      hover:bg-[#188353]
      transition
      font-semibold
      text-white
    "
                        >
                            Subscribe
                        </button>

                    </div>

                </div>

                <div className="border-t border-white/10 mt-16">

                    <div className="py-7 flex flex-col md:flex-row justify-between items-center gap-4">

                        <p className="text-[#BEBEBE] text-center md:text-left">
                            Copyright ©2026.
                            <span className="text-white font-semibold">
                                {" "}CleanPro{" "}
                            </span>
                            All Rights Reserved By
                            <span className="text-[#22A46D] font-semibold">
                                {" "}Cssfounder
                            </span>
                        </p>

                        <div className="flex gap-6">
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}