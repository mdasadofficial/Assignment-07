"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyNavLink = ({ href, children }) => {
    const pathname = usePathname();


    return (
        <Link href={href}
            className={`${pathname === href ? " bg-emerald-900 rounded-2xl py-1 px-2 text-amber-50" : ""}`}
        >{children}</Link>
    );
};

export default MyNavLink;