"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Should you replace sponges or disinfect them?",
        answer: "Edite per sociosqu felis quam ridiculus laoreet tempus, eleifend faucibus commodo. Laoreet mauris congue sodales interdum lobortis proin laoreet quis arcu nostra et nam primis dolor sagittis duis laoreet, ultrices habitasse diam quisque in auctor porta metus viverra curae maecenas iaculis tempo pulvinar vitae dictum lorem ipsum orci."
    },
    {
        question: "How do you get stains off the walls without chipping the paint?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        question: "Why doesn't my vacuum cleaner do a good job?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        question: "Is there a way to clean a stopped drain that's less gross?",
        answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
        question: "How can I clean this neglected area so it looks brand new?",
        answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
        question: "What do you do you have to move heavy furniture to vacuum?",
        answer: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
        question: "How do you treat different materials like marble or granite?",
        answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
    },
    {
        question: "Why do I need reports from all 3 credit bureaus?",
        answer: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
        question: "Have you ever seen a co-worker What did you do?",
        answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
    },
    {
        question: "How much you need to clean a working space of 10 offices?",
        answer: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
    }
];

export default function FaqAccordion() {
    // Open the first item by default
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="bg-[#F8F9FA] py-16 md:py-24">
            <div className="max-w-[900px] mx-auto px-4 lg:px-6">
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div 
                                key={index} 
                                className="bg-white shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-sm overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                                >
                                    <h4 className={`text-[16px] md:text-[17px] font-bold transition-colors duration-300 ${isOpen ? 'text-[#0D2235]' : 'text-[#0D2235] group-hover:text-[#1FA463]'}`}>
                                        {faq.question}
                                    </h4>
                                    
                                    <div className={`ml-4 shrink-0 flex items-center justify-center w-[35px] h-[35px] transition-colors duration-300 ${isOpen ? 'bg-[#1FA463] text-white' : 'bg-transparent text-[#6B7280] group-hover:text-[#1FA463]'}`}>
                                        {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                                    </div>
                                </button>
                                
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-5 md:p-6 pt-0 border-t border-gray-50 text-[#6B7280] text-[15px] leading-[1.8]">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
