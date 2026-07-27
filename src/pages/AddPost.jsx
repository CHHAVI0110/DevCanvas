import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
    return (
        <div className="min-h-screen bg-slate-50 py-14">

            <Container>

                <div className="mx-auto max-w-6xl">

                    {/* Page Header */}
                    <div className="mb-10 text-center">

                        

                        <h1 className="
                            mt-5
                            text-4xl
                            font-extrabold
                            text-slate-900
                            md:text-5xl
                        ">
                            Write a New Blog
                        </h1>

                        <p className="
                            mx-auto
                            mt-4
                            max-w-2xl
                            text-slate-500
                            text-lg
                        ">
                            Share your knowledge, tutorials, and experiences
                            with the DevCanvas developer community.
                        </p>

                    </div>


                    {/* Form Card */}
                    <div className="
                        rounded-3xl
                        bg-white
                        p-6
                        shadow-xl
                        border
                        border-slate-200
                        md:p-10
                    ">
                        <PostForm />
                    </div>

                </div>

            </Container>

        </div>
    )
}

export default AddPost