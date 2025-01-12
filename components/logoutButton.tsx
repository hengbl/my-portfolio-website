'use client';

import { useState } from 'react';
import { useSession, signOut} from 'next-auth/react';
import { useTheme } from '@/context/theme-context';
import toast from 'react-hot-toast';

export default function LogoutButton() {
    const { data: session } = useSession();
    const { theme } = useTheme();
    const isDarkMode = theme == 'dark';
    const [isLoading, setIsLoading] = useState(false);

    if (!session) return null;

    const handleSignOut = async () => {
        setIsLoading(true);
        try {
            await signOut({ callbackUrl:'/login' });
            toast.success('Logged out successfully');
        } catch (error) {
            toast.error('Error logging out');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button 
            onClick={handleSignOut}
            disabled={isLoading}
        >
            {isLoading ? 
            <span className='loading loading-spinner loading-sm'></span> : 
            (<span 
                className={`ml-4 text-xs underline hover:opacity-75 transition-opacity
                    ${isDarkMode ? 'text-red-400' : 'text-red-500'}`}
            >Sign out
            </span>)}
        </button>
    );
}