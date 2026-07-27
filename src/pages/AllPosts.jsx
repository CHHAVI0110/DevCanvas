import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className="min-h-screen bg-slate-50 py-14">

            <Container>

                {/* Header Section */}
                <div className="mb-12 text-center">

                    

                    <h1 className="
                        mt-5
                        text-4xl
                        md:text-5xl
                        font-extrabold
                        text-slate-900
                    ">
                        Explore All Posts
                    </h1>

                    <p className="
                        mx-auto
                        mt-4
                        max-w-2xl
                        text-slate-500
                        text-lg
                    ">
                        Discover tutorials, developer stories, and technical
                        articles created by the DevCanvas community.
                    </p>

                </div>


                {/* Posts Grid */}
                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    gap-8
                ">

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


                {/* Empty State */}
                {posts.length === 0 && (

                    <div className="
                        rounded-3xl
                        bg-white
                        p-12
                        text-center
                        shadow-lg
                        border
                        border-slate-200
                    ">

                        <h2 className="
                            text-3xl
                            font-bold
                            text-slate-800
                        ">
                            No Posts Found
                        </h2>

                        <p className="
                            mt-3
                            text-slate-500
                        ">
                            There are currently no articles available.
                        </p>

                    </div>

                )}

            </Container>

        </div>
    )
}

export default AllPosts