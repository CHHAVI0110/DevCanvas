import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="min-h-screen bg-slate-50">

                {/* Hero */}
                <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                    <Container>
                        <div className="flex min-h-[45vh] flex-col items-center justify-center text-center text-white">

                            <h1 className="text-5xl font-extrabold tracking-tight">
                                Welcome to DevCanvas
                            </h1>

                            <p className="mt-5 max-w-2xl text-lg text-blue-100">
                                Discover developer stories, tutorials, and technical
                                articles shared by the community.
                            </p>

                        </div>
                    </Container>
                </section>

                {/* Empty State */}
                <Container>
                    <div className="py-24">

                        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-12 text-center shadow-xl border border-slate-200">

                            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                                <span className="text-4xl">📖</span>
                            </div>

                            <h2 className="text-3xl font-bold text-slate-800">
                                Login First to Explore Posts
                            </h2>

                            <p className="mt-4 text-slate-500 leading-7">
                               Please login to view developer blogs, create your own posts, and share your knowledge with the DevCanvas community.
                            </p>

                        </div>

                    </div>
                </Container>

            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">

                <Container>

                    <div className="flex min-h-[45vh] flex-col items-center justify-center text-center text-white">

                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                            Welcome to DevCanvas
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg md:text-xl text-blue-100 leading-8">
                            Explore tutorials, programming insights, developer
                            experiences, and technical blogs from creators around
                            the world.
                        </p>

                    </div>

                </Container>

            </section>

            {/* Blog Section */}
            <section className="py-20">

                <Container>

                    <div className="mb-12 flex items-end justify-between">

                        <div>

                            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                                Latest Posts
                            </span>

                            <h2 className="mt-4 text-4xl font-bold text-slate-800">
                                Featured Articles
                            </h2>

                            <p className="mt-3 w-screen text-slate-500 flex flex-inline">
                                Stay updated with the newest tutorials, coding
                                tips, and developer experiences shared by our
                                community.
                            </p>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {posts.map((post) => (

                            <div
                                key={post.$id}
                                className="
                                    group
                                    transition-all
                                    duration-300
                                    hover:-translate-y-2
                                "
                            >
                                <PostCard {...post} />
                            </div>

                        ))}

                    </div>

                </Container>

            </section>

        </div>
    )
}

export default Home