"use client";

import {
    Users,
    ThumbsUp,
    ClipboardCheck,
    Award,
} from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "20+",
        title: "Qualified Workers",
    },
    {
        icon: ThumbsUp,
        value: "4.8",
        title: "Our Average Rating",
    },
    {
        icon: ClipboardCheck,
        value: "500+",
        title: "Projects Completed",
    },
    {
        icon: Award,
        value: "5+",
        title: "Years on the Market",
    },
];

export default function StatsSection() {
    return (
        <section className="bg-[#0B4C34]">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="
                  flex items-center
                  gap-4
                  px-6
                  py-8
                  border-b
                  sm:border-r
                  border-white/10
                  last:border-r-0
                  lg:border-b-0
                "
                            >
                                {/* Icon */}

                                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">

                                    <Icon
                                        size={26}
                                        className="text-white"
                                    />

                                </div>

                                {/* Text */}

                                <div>

                                    <h3 className="text-white text-3xl lg:text-4xl font-bold leading-none">
                                        {item.value}
                                    </h3>

                                    <p className="text-white/80 text-sm lg:text-base mt-2">
                                        {item.title}
                                    </p>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}