import '../styles/globals.css';

import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
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
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
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
