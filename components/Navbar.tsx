import Link from 'next/link';
import { Popover } from '@headlessui/react';

const Logo = () => (
    <Link href="/#intro">
        <a className="text-3xl font-bold font-heading">Justin Morgan</a>
    </Link>
);

const links = [
    { to: '#projects', label: 'Projects' },
    { to: '#mentoring', label: 'Mentoring' },
    { to: '#opensource', label: 'Open Source' },
    { to: '#technicalwriting', label: 'Technical Writing' },
];

interface MainItemsProps {
    clickHandler: (id: string) => void;
}
const MainItems = () => (
    <ul className="hidden md:flex ml-auto font-semibold font-heading space-x-6 lg:space-x-12">
        {links.map((link) => (
            <li key={link.label}>
                <Link href={link.to}>
                    <a className="hover:text-gray-200">{link.label}</a>
                </Link>
            </li>
        ))}
    </ul>
);

const Hamburger = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 hover:text-gray-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}
const NavLink = ({ children, href }: NavLinkProps) => (
    <Link href={href}>
        <a className="">{children}</a>
    </Link>
);

function Navbar({}: {}) {
    return (
        <nav className="sticky top-0 z-10 filter drop-shadow-2xl">
            <div className="text-white w-screen">
                <div className="relative px-4 md:px-8 lg:px-48 py-6 flex w-full justify-between items-center bg-gray-900">
                    <Logo />
                    <MainItems />
                    <Popover className="md:hidden">
                        <Popover.Button>
                            <Hamburger />
                        </Popover.Button>
                        <Popover.Panel className="absolute left-0 right-0 z-10 p-4 bg-gray-900 rounded-lg">
                            <div className="flex flex-col items-end">
                                {links.map((link) => (
                                    <Popover.Button key={link.to} as="a" href={link.to}>
                                        {link.label}
                                    </Popover.Button>
                                ))}
                            </div>
                        </Popover.Panel>
                    </Popover>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
