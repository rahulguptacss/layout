"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function TermsContent() {
    return (
        <section className="py-6 md:py-10 bg-white">
            <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="italic text-gray-500 mb-8 text-[15px]">This Privacy Policy was last updated on September 1, 2024.</p>

                    <div className="space-y-10">
                        <div>
                            <h3 className="text-[22px] md:text-[24px] font-bold text-[#0D2235] mb-4">1. What Data We Get</h3>
                            <p className="text-gray-500 text-[16px] leading-[1.8]">
                                We collect certain data from you directly like information you enter yourself data about your participation in courses and data from third-party platforms you connect with. We also collect some data automatically like information about your device and what parts of our Services you interact with or spend time using.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[22px] md:text-[24px] font-bold text-[#0D2235] mb-4">2. Data You Provide to Us</h3>
                            <p className="text-gray-500 text-[16px] leading-[1.8]">
                                We may collect different data from or about you depending on how you use the Services. Below are some examples to help you better understand the data we collect.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[22px] md:text-[24px] font-bold text-[#0D2235] mb-4">3. How We Get Data About You</h3>
                            <p className="text-gray-500 text-[16px] leading-[1.8]">
                                We use tools like cookies, web beacons, analytics services, and advertising providers to gather the data listed above. Some of these tools offer you the ability to opt out of data collection.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[22px] md:text-[24px] font-bold text-[#0D2235] mb-4">4. What We Use Your Data For</h3>
                            <ol className="list-decimal pl-5 space-y-3 text-gray-500 text-[16px] leading-[1.8]">
                                <li>Responding to your questions and concerns;</li>
                                <li>Sending you administrative messages and information, including messages from instructors and teaching assistants, notifications about changes to our Service, and updates to our agreements;</li>
                                <li>Sending push notifications to your wireless device to provide updates and other relevant messages (which you can manage from the "options" or "settings" page of the mobile app);</li>
                            </ol>
                        </div>

                        <div>
                            <h3 className="text-[22px] md:text-[24px] font-bold text-[#0D2235] mb-4">5. Your Choices About the Use of Your Data</h3>
                            <p className="text-gray-500 text-[16px] leading-[1.8] mb-4">
                                You can choose not to provide certain data to us, but you may not be able to use certain features of the Services.
                            </p>
                            <ul className="list-disc pl-5 space-y-3 text-gray-500 text-[16px] leading-[1.8]">
                                <li>To stop receiving promotional communications from us, you can opt out by using the unsubscribe mechanism in the promotional communication you receive or by changing the email preferences in your account. Note that regardless of your email preference settings, we will send you transactional and relationship messages regarding the Services, including administrative confirmations, order confirmations, important updates about the Services, and notices about our policies.</li>
                                <li>The browser or device you use may allow you to control cookies and other types of local data storage. Your wireless device may also allow you to control whether location or other data is collected and shared. You can manage Adobe's LSOs through their Website Storage Settings panel.</li>
                                <li>To get information and control cookies used for tailored advertising from participating companies, see the consumer opt-out pages for the Network Advertising Initiative and Digital Advertising Alliance, or if you're located in the European Union, visit the Your Online Choices site. To opt out of Google's display advertising or customize Google Display Network ads, visit the Google Ads Settings page. To opt out of Taboola's targeted ads, see the Opt-out Link in their Cookie Policy.</li>
                                <li>To update data you provide directly, log into your account and update your account at any time.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[22px] md:text-[24px] font-bold text-[#0D2235] mb-4">6. Our Policy Concerning Children</h3>
                            <p className="text-gray-500 text-[16px] leading-[1.8]">
                                We recognize the privacy interests of children and encourage parents and guardians to take an active role in their children's online activities and interests. Children under 13 (or under 16 in the European Economic Area) should not use the Services. If we learn that we've collected personal data from a child under those ages.
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
