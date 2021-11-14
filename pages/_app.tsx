import '../styles/globals.css';

import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IconSymbols } from '../components/IconSymbols';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-gray-900 text-white">
            <Head>
                <title>Justin Morgan - Software Developer</title>
                <meta
                    name="description"
                    content="Professional Portfolio Site for Justin Morgan, a software developer in southern British Columbia"
                />
                <link
                    rel="stylesheet"
                    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <IconSymbols />

            <main className="bg-gray-900 min-h-screen relative">
                <Navbar />
                <Component {...pageProps} />
            </main>

            <Footer />
        </div>
    );
}

export default MyApp;
