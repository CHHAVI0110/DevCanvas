import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {

    const { register, handleSubmit, watch, setValue, control, getValues } =
        useForm({
            defaultValues: {
                title: post?.title || "",
                slug: post?.$id || "",
                content: post?.content || "",
                status: post?.status || "active",
            },
        });


    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);


    const submit = async (data) => {

        if (post) {

            const file = data.image[0]
                ? await appwriteService.uploadFile(data.image[0])
                : null;


            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }


            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });


            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }

        } else {

            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {

                data.featuredImage = file.$id;

                const dbPost =
                    await appwriteService.createPost({
                        ...data,
                        userId: userData.$id
                    });


                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }

            }

        }

    };


    const slugTransform = useCallback((value) => {

        if (value && typeof value === "string")

            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");


        return "";

    }, []);



    React.useEffect(() => {

        const subscription = watch((value, { name }) => {

            if (name === "title") {

                setValue(
                    "slug",
                    slugTransform(value.title),
                    {
                        shouldValidate: true
                    }
                );

            }

        });


        return () => subscription.unsubscribe();

    }, [watch, slugTransform, setValue]);



    return (

        <form
            onSubmit={handleSubmit(submit)}
            className="
                grid
                grid-cols-1
                gap-8
                lg:grid-cols-3
            "
        >


            {/* Main Editor */}

            <div className="lg:col-span-2">


                <div className="space-y-5">


                    <Input
                        label="Title"
                        placeholder="Enter blog title"
                        className="mb-4"
                        {...register("title", {
                            required: true
                        })}
                    />


                    <Input
                        label="Slug"
                        placeholder="blog-url"
                        className="mb-4"
                        {...register("slug", {
                            required: true
                        })}
                        onInput={(e) => {

                            setValue(
                                "slug",
                                slugTransform(
                                    e.currentTarget.value
                                ),
                                {
                                    shouldValidate:true
                                }
                            );

                        }}
                    />


                    <div className="
                        rounded-2xl
                        border
                        border-slate-200
                        p-4
                    ">

                        <RTE
                            label="Content"
                            name="content"
                            control={control}
                            defaultValue={getValues("content")}
                        />

                    </div>


                </div>


            </div>



            {/* Sidebar */}

            <div className="space-y-6">


                <div className="
                    rounded-2xl
                    bg-slate-50
                    p-5
                    border
                    border-slate-200
                ">


                    <Input
                        label="Featured Image"
                        type="file"
                        className="mb-5"
                        accept="
                        image/png,
                        image/jpg,
                        image/jpeg,
                        image/gif
                        "
                        {...register("image", {
                            required: !post
                        })}
                    />



                    {post && (

                        <div className="mb-5 overflow-hidden rounded-2xl">

                            <img
                                src={
                                    appwriteService.getFilePreview(
                                        post.featuredImage
                                    )
                                }
                                alt={post.title}
                                className="
                                    h-60
                                    w-full
                                    object-cover
                                "
                            />

                        </div>

                    )}



                    <Select
                        options={[
                            "active",
                            "inactive"
                        ]}
                        label="Status"
                        className="mb-5"
                        {...register("status", {
                            required:true
                        })}
                    />



                    <Button
                        type="submit"
                        className="
                            w-full
                            rounded-full
                            bg-gradient-to-r
                            from-blue-600
                            via-indigo-600
                            to-violet-600
                            py-3
                            text-white
                            font-semibold
                            shadow-lg
                            hover:shadow-xl
                        "
                    >

                        {post ? "Update Post" : "Publish Post"}

                    </Button>


                </div>


            </div>


        </form>

    );
}