import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <section className="mt-20 border-t border-slate-800 bg-slate-950 text-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="-m-6 flex flex-wrap">

                    {/* Logo */}
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">

                            <div>
                                <div className="mb-6 inline-flex items-center">
                                    <Logo width="120px" />
                                </div>

                                <p className="max-w-sm leading-7 text-slate-400">
                                    DevCanvas is a modern blogging platform where
                                    developers share ideas, tutorials, experiences,
                                    and knowledge with the community.
                                </p>
                            </div>

                            <div className="mt-8 border-t border-slate-800 pt-6">
                                <p className="text-sm text-slate-500">
                                    © 2026 <span className="font-semibold text-white">DevCanvas</span>.
                                    All rights reserved.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Company */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">

                            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                                Company
                            </h3>

                            <ul className="space-y-4">

                                <li>
                                    <Link
                                        className="text-slate-300 transition duration-300 hover:pl-2 hover:text-blue-400"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-slate-300 transition duration-300 hover:pl-2 hover:text-blue-400"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-slate-300 transition duration-300 hover:pl-2 hover:text-blue-400"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-slate-300 transition duration-300 hover:pl-2 hover:text-blue-400"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    </div>

                    {/* Support */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">

                            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                                Support
                            </h3>

                            <ul className="space-y-4">

                                <li>
                                    <Link
                                        className="text-slate-300 transition duration-300 hover:pl-2 hover:text-blue-400"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-slate-300 transition duration-300 hover:pl-2 hover:text-blue-400"
                                        to="/"
                                    >
                                        Help Center
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-slate-300 transition duration-300 hover:pl-2 hover:text-blue-400"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-slate-300 transition duration-300 hover:pl-2 hover:text-blue-400"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    </div>

                    {/* Legal */}
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">

                            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                                Legal
                            </h3>

                            <ul className="space-y-4">

                                <li>
                                    <Link
                                        className="text-slate-300 transition duration-300 hover:pl-2 hover:text-blue-400"
                                        to="/"
                                    >
                                        Terms & Conditions
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-slate-300 transition duration-300 hover:pl-2 hover:text-blue-400"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-slate-300 transition duration-300 hover:pl-2 hover:text-blue-400"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer