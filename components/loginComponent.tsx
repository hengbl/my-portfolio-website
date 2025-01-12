"use client";

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { useTheme } from '@/context/theme-context';
import { LockClosedIcon } from '@heroicons/react/24/solid';

export default function Login() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formData = new FormData(e.currentTarget);
            const response = await signIn('credentials', {
                username: formData.get('username') as string,
                password: formData.get('password') as string,
                redirect: false,
            });
            if (response?.error) {
                toast.error('Invalid username or password');
                return;
            }

            toast.success('Login successful');
            router.push('/');
            router.refresh();
        } catch (error) {
            toast.error('Something went wrong!');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
            <div className="max-w-md w-full">
                <div className={`card shadow-xl ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <div className="card-body items-center">
                        {/* Avatar */}
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4
                            ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                            <LockClosedIcon className={`w-8 h-8 
                                ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`} />
                        </div>

                        <h2 className="card-title text-2xl mb-6">Sign in</h2>

                        <form onSubmit={handleSubmit} className="w-full space-y-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className={`label-text 
                                        ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                                        Username
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    required
                                    autoComplete="username"
                                    autoFocus
                                    className={`input input-bordered w-full
                                        ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'}
                                        border-gray-300 dark:border-gray-700`}
                                    placeholder="Enter your username"
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className={`label-text 
                                        ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                                        Password
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    required
                                    autoComplete="current-password"
                                    className={`input input-bordered w-full
                                        ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'}
                                        border-gray-300 dark:border-gray-700`}
                                    placeholder="Enter your password"
                                />
                            </div>

                            <button
                                type="submit"
                                className={`btn w-full 
                                    ${isDarkMode ? 
                                        'bg-blue-600 hover:bg-blue-700 text-white' : 
                                        'bg-blue-500 hover:bg-blue-600 text-white'}`}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className='flex items-center justify-center gap-2'>
                                        <span>Signing in</span>
                                        <span className='loading loading-spinner loading-sm'></span>
                                    </div>
                                    ) :
                                    <span>Sign In</span>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}