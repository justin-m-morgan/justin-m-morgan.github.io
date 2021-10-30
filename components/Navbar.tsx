import Link from 'next/link';

const Logo = () => (
    <Link href="/#intro">
        <a className="text-3xl font-bold font-heading">Justin Morgan</a>
    </Link>
);

const links = [
    { to: 'projects', label: 'Projects' },
    { to: 'mentoring', label: 'Mentoring' },
    { to: 'opensource', label: 'Open Source' },
    { to: 'technicalwriting', label: 'Technical Writing' },
];

interface MainItemsProps {
    clickHandler: (id: string) => void;
}
const MainItems = () => (
    <ul className="hidden md:flex ml-auto font-semibold font-heading space-x-6 lg:space-x-12">
        {links.map((link) => (
            <li key={link.label}>
                <Link href={`/#${link.to}`}>
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

function Navbar({}: {}) {
    return (
        <nav className="sticky top-0 z-10 filter drop-shadow-2xl">
            <div className="text-white w-screen ">
                <div className="px-5 px-24 lg:px-48 py-6 flex w-full items-center bg-gray-900">
                    <Logo />
                    <MainItems />
                </div>

                <a className="navbar-burger self-center md:hidden" href="#">
                    <Hamburger />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
