import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import { useForm } from "react-hook-form"

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")


    const login = async (data) => {
        setError("")

        try {
            const session = await authService.login(data)

            if (session) {
                const userData = await authService.getCurrentUser()

                if (userData) {
                    dispatch(authLogin(userData))
                }

                navigate("/")
            }

        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <div className="
            min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4 py-10
        ">

            <div className="
                w-full 
                max-w-md 
                bg-white/80 
                backdrop-blur-xl
                rounded-3xl 
                shadow-2xl 
                border 
                border-white/40
                p-8
            ">




                {/* Heading */}
                <h2 className="
                    text-center
                    text-3xl
                    font-bold
                    text-gray-900
                ">
                    Welcome back
                </h2>


                <p className="
                    mt-3
                    text-center
                    text-gray-500
                ">
                    Don't have an account?{" "}

                    <Link
                        to="/signup"
                        className="
                            font-semibold
                            text-blue-600
                            hover:text-blue-800
                            transition
                        "
                    >
                        Sign Up
                    </Link>

                </p>



                {/* Error */}
                {error && (

                    <div className="
                        mt-5
                        rounded-lg
                        bg-red-50
                        border
                        border-red-200
                        p-3
                        text-center
                        text-sm
                        text-red-600
                    ">
                        {error}
                    </div>

                )}




                {/* Form */}
                <form
                    onSubmit={handleSubmit(login)}
                    className="mt-8"
                >

                    <div className="space-y-5">


                        <Input
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {

                                required: true,

                                validate: {

                                    matchPatern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
                                        ||
                                        "Email address must be a valid address"

                                }

                            })}
                        />



                        <Input

                            label="Password"

                            type="password"

                            placeholder="Enter your password"

                            {...register("password", {

                                required: true

                            })}

                        />




                        <Button

                            type="submit"

                            className="
                                w-full
                                mt-4
                                rounded-xl
                                bg-gradient-to-r
                                from-blue-600
                                to-indigo-600
                                hover:from-blue-700
                                hover:to-indigo-700
                                text-white
                                py-3
                                font-semibold
                                shadow-lg
                                transition-all
                                duration-300
                                hover:scale-[1.02]
                            "

                        >
                            Sign In

                        </Button>



                    </div>

                </form>


            </div>

        </div>
    )
}

export default Login