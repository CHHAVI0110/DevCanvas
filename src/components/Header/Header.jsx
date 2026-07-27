import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true,
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus,
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus,
        },
    ]

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/70 shadow-sm">
            <Container>
                <nav className="flex h-20 items-center justify-between">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="group flex items-center gap-3"
                    >
                        <div>
                            <h1 className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent transition duration-300 group-hover:scale-105">
                                DevCanvas
                            </h1>

                            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                                Share • Learn • Create
                            </p>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <ul className="flex items-center gap-3">

                        {navItems.map(
                            (item) =>
                                item.active && (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => navigate(item.slug)}
                                            className="
                                                rounded-full
                                                px-5
                                                py-2.5
                                                text-sm
                                                font-semibold
                                                text-slate-700
                                                transition-all
                                                duration-300
                                                hover:-translate-y-0.5
                                                hover:bg-gradient-to-r
                                                hover:from-blue-600
                                                hover:to-indigo-600
                                                hover:text-white
                                                hover:shadow-lg
                                                hover:shadow-blue-200/50
                                            "
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                )
                        )}

                        {authStatus && (
                            <li className="ml-2">
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>

                </nav>
            </Container>
        </header>
    )
}

export default Header