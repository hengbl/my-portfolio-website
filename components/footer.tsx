import React from 'react';
import Link from 'next/link';
import LogoutButton from './logoutButton';

export default function Footer() {
  return (
    <footer className="mb-6 px-4 text-center text-gray-500">
        <p className="text-xs">
            <span>Built with </span>
            <Link
              href='/login'
              className="hover:opacity-75 transition-opacity cursor-pointer"
            >
              💜
            </Link>
            <span> by Boon Long</span>
            <LogoutButton />
        </p>
    </footer>
  )
}
