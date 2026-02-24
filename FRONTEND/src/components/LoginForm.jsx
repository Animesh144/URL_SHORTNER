import React, { useState } from 'react';
import { loginUser } from '../api/user.api';
import {useDispatch, useSelector} from 'react-redux';
import { login } from '../store/slice/authSlice.js';
import { useNavigate } from '@tanstack/react-router';

const LoginForm = ({ state }) => {
    const [email, setEmail] = useState('sarkaranurag104@gmail.com');
    const [password, setPassword] = useState('password123');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    console.log(auth)

    const handleSubmit = async () => {
        setLoading(true);
        setError('');

        try {
            const data = await loginUser(password, email);
            dispatch(login(data.user))
            navigate({to:"/dashboard"})
            setLoading(false);
            console.log("signin success")
        } catch (err) {
            setLoading(false);
            setError(err.message || 'Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white/95 shadow-2xl rounded-2xl px-8 pt-8 pb-8 border border-[#D6D58E]/60">
                <h2 className="text-2xl font-bold text-center mb-2 text-[#042940]">Login</h2>
                <p className="text-xs text-center mb-6 text-gray-500">
                    Welcome back! Sign in to manage your short links.
                </p>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                        {error}
                    </div>
                )}

                <div className="mb-4">
                    <label className="block text-[#042940] text-sm font-semibold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow-sm appearance-none border border-[#D6D58E] rounded-xl w-full py-2.5 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-[#9FC131] focus:border-[#9FC131] bg-[#F9FAFB]"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-[#042940] text-sm font-semibold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow-sm appearance-none border border-[#D6D58E] rounded-xl w-full py-2.5 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-[#9FC131] focus:border-[#9FC131] bg-[#F9FAFB]"
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className={`bg-[#005C53] hover:bg-[#042940] text-white font-semibold py-2.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DBF227] w-full shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type="submit"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </div>

                <div className="text-center mt-4">
                    <p className="cursor-pointer text-sm text-gray-600">
                        Don't have an account?{' '}
                        <span
                            onClick={() => state(false)}
                            className="text-[#005C53] font-semibold hover:text-[#042940]"
                        >
                            Register
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;