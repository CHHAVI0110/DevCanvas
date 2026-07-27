import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button
            onClick={logoutHandler}
            className="
                rounded-full
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-violet-600
                px-6
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-md
                shadow-blue-200/50
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-xl
                hover:shadow-indigo-300/40
                active:scale-95
                active:shadow-md
            "
        >
            Logout
        </button>
    )
}

export default LogoutBtn