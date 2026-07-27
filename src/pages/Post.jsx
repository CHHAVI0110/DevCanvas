import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="min-h-screen bg-slate-50 py-12">
            <Container>

                <div className="mx-auto max-w-5xl">

                    {/* Featured Image */}
                    <div className="relative mb-10 overflow-hidden rounded-3xl bg-white shadow-xl">

                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="h-[450px] w-full object-cover"
                        />

                        {isAuthor && (
                            <div className="absolute right-6 top-6 flex gap-3">

                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button
                                        bgColor="bg-gradient-to-r from-emerald-500 to-green-600"
                                        className="rounded-full px-6 py-2 shadow-lg"
                                    >
                                        Edit
                                    </Button>
                                </Link>

                                <Button
                                    bgColor="bg-gradient-to-r from-red-500 to-rose-600"
                                    className="rounded-full px-6 py-2 shadow-lg"
                                    onClick={deletePost}
                                >
                                    Delete
                                </Button>

                            </div>
                        )}

                    </div>

                    {/* Article */}
                    <div className="rounded-3xl bg-white p-8 md:p-12 shadow-lg">

                        {/* Category */}
                        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                            Developer Blog
                        </span>

                        {/* Title */}
                        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
                            {post.title}
                        </h1>

                        <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>

                        {/* Content */}
                        <div className="browser-css prose prose-lg mt-10 max-w-none prose-slate prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-blue-600 prose-img:rounded-xl">
                            {parse(post.content)}
                        </div>

                    </div>

                </div>

            </Container>
        </div>
    ) : null;
}