import React from 'react';
import Link from 'next/link';

export const OutlineButtonStyles =
    'text-center border-white border-2 rounded-full py-3 px-8 hover:bg-blue-100 hover:text-gray-900 transition duration-200';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit';
    onClick?: () => void;
}
const Button = ({ children, className, onClick = () => {}, type = 'button' }: ButtonProps) => (
    <button type={type} onClick={onClick} className={`${OutlineButtonStyles} ${className}`}>
        {children}
    </button>
);

interface ButtonLinkProps {
    children: React.ReactNode;
    className?: string;
    to: string;
}
const ButtonInternalLink = ({ children, className, to }: ButtonLinkProps) => (
    <Link href={to}>
        <a className={`${OutlineButtonStyles} ${className}`}>{children}</a>
    </Link>
);
const ButtonLink = ({ children, className, to }: ButtonLinkProps) => (
    <a href={to} target="_blank" rel="noreferrer" className={`${OutlineButtonStyles} ${className}`}>
        {children}
    </a>
);

export { Button, ButtonLink, ButtonInternalLink };
