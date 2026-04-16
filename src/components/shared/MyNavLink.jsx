"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyNavLink = ({ href, children }) => {
    const pathname = usePathname();


    return (
        <Link href={href}
            className={`${pathname === href ? "border-b-2 border-amber-400" : ""}`}
        >{children}</Link>
    );
};

export default MyNavLink;