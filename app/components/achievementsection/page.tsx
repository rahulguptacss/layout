"use client";

import { useEffect, useState, useRef } from "react";
import { PartyPopper, Users, Award, LucideIcon } from "lucide-react";
import { motion, useInView, animate } from "framer-motion";
import siteData from "@/src/data/data.json";

const { achievements } = siteData;

const iconMap: Record<string, LucideIcon> = {
    PartyPopper,
    Users,
    Award
};

const mappedAchievements = achievements.items.map(item => ({
    ...item,
    icon: iconMap[item.iconName] || PartyPopper
}));

function Counter({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [display, setDisplay] = useState("0");

    const num = parseFloat(value);

    useEffect(() => {
        if (inView) {
            const controls = animate(0, num, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate: (latest) => {
                    setDisplay(Math.floor(latest).toString());
                }
            });
            return controls.stop;
        }
    }, [inView, num]);

    return <span ref={ref}>{display}</span>;
}

export default function AchievementSection() {
    return (
        <section className="bg-white py-16 lg:py-20 relative overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
                    {mappedAchievements.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="flex items-start gap-5 lg:gap-6"
                            >
                                {/* Icon Box */}
                                <div className="w-[70px] h-[70px] lg:w-[85px] lg:h-[85px] shrink-0 rounded-[16px] bg-[#E8F4EE] flex items-center justify-center text-[#138A56]">
                                    <Icon size={38} strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <div className="mt-1">
                                    <div className="flex items-baseline gap-2 mb-1.5">
                                        <h3 className="text-[#138A56] text-[42px] lg:text-[48px] font-extrabold leading-none tracking-tight">
                                            <Counter value={item.value} />
                                        </h3>
                                        <span className="text-[#138A56] text-[18px] lg:text-[22px] font-semibold">
                                            {item.title}
                                        </span>
                                    </div>
                                    <p className="text-[#6B7280] text-[13px] lg:text-[14px] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
