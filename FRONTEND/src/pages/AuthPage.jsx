import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const AuthPage = () => {

    const [login, setLogin] = useState(true)

    return (
        <div className="min-h-screen bg-[#042940] text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">
            {/* Decorative animated shapes */}
            <div className="pointer-events-none absolute -left-10 top-10 w-32 h-32 rounded-full bg-[#005C53]/40 blur-2xl animate-pulse" />
            <div className="pointer-events-none absolute right-0 bottom-10 w-40 h-40 rounded-full bg-[#9FC131]/40 blur-3xl animate-ping" />
            <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 w-24 h-24 rounded-3xl bg-[#DBF227]/20 border border-[#DBF227]/40 animate-bounce" />

            <div className="relative z-10 w-full max-w-md">
                {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
            </div>
        </div>
    )
}

export default AuthPage