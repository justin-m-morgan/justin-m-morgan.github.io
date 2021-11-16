import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import IndexIntro from '../sections/IndexIntro';
import Mentoring from '../sections/Mentoring';
import OpenSource from '../sections/OpenSource';
import Projects from '../sections/Projects';
import TechnicalWriting from '../sections/TechnicalWriting';

interface Section {
    Component: () => JSX.Element;
    label: string;
    id: string;
}
const sections: Section[] = [
    { Component: Projects, label: 'Projects', id: 'projects' },
    { Component: Mentoring, label: 'Mentoring', id: 'mentoring' },
    { Component: OpenSource, label: 'Open Source', id: 'opensource' },
    { Component: TechnicalWriting, label: 'Technical Writing', id: 'technicalwriting' },
];

const Home: NextPage = () => {
    return (
        <>
            <Section id={'intro'} heading="Intro" className="mt-36">
                <IndexIntro />
            </Section>
            {sections.map(({ Component, label, id }) => (
                <Section key={id} id={id} heading={label}>
                    <Component />
                </Section>
            ))}
        </>
    );
};

// TODO: Apply updated articles (view-count) to pre-rendering pipeline
// export async function getStaticProps() {
//     const articles = await updateArticlesViewCount(featuredArticles);

//     return {
//         props: {
//             articles,
//         },
//     };
// }

export default Home;
