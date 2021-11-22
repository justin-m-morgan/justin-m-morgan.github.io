import Image from 'next/image';

export const Custom404 = () => (
    <div className="mx-auto max-w-xl text-center flex flex-col min-h-screen justify-center items-center">
        <Image src="/unicorn_bg_removed.png" alt="" height="400" width="400" className="object-cover" />
        <h1 className="text-5xl font-bold pb-3">Page Not Found</h1>
        <h2 className="text-xl font-bold pb-8">Oops, looks like this page does not exist.</h2>
        <p>
            Hopefully, this was just a typo on your end. If you were attempting to navigate to a page that should
            obviously exist, please contact me so I can fix the problem.
        </p>
    </div>
);

export default Custom404;
