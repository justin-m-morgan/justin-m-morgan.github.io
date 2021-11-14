import Card from '../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

interface DevToArticle {
    id: number;
    title: string;
    description: string;
    tag_list: string[];
    canonical_url: string;
    comments_count: number;
    positive_reactions_count: number;
    public_reactions_count: number;
    page_views_count: number;
    reading_time_minutes: number;
}

const articles: DevToArticle[] = [
    {
        id: 638591,
        title: 'Point-Free Style (in Javascript)',
        description:
            'Point-free style exploits function arity to allow for passing of paramater-less function references in interesting ways. But taken too far, it can be a challenge for the uninitiated to engage with code written in this style.',
        comments_count: 0,
        public_reactions_count: 10,
        page_views_count: 561,
        positive_reactions_count: 10,
        tag_list: ['javascript', 'pointfree', 'functional'],
        canonical_url: 'https://dev.to/justin_m_morgan/point-free-style-in-javascript-43o9',
        reading_time_minutes: 13,
    },
    {
        id: 549015,
        title: 'A Deeper Dive into Function Arity',
        description:
            'Callbacks in Javascript have a great deal of flexibility. But have you ever taken the time to consider their various forms? We will explore how the concept of "arity" is often glossed over by Javascript developers.',
        comments_count: 0,
        public_reactions_count: 9,
        page_views_count: 347,
        positive_reactions_count: 9,
        tag_list: ['javascript', 'arity', 'functional', 'cleancode'],
        canonical_url: 'https://dev.to/justin_m_morgan/a-deeper-dive-into-function-arity-with-a-focus-on-javascript-ae',
        reading_time_minutes: 10,
    },
];

interface ArticleProps {
    article: DevToArticle;
}
const ArticleCard = ({ article: { id, title, description, page_views_count } }: ArticleProps) => {
    const [view_count, setPageViewCount] = useState(page_views_count);
    useEffect(() => {
        getArticleViewCount(id, page_views_count).then((count) => {
            setPageViewCount(count);
        });
    }, []);

    return (
        <Card className="flex flex-col">
            <div className="flex items-center space-x-4 pb-4">
                <FontAwesomeIcon icon={faDev} className="h-8 md:h-16" />
                <h3 className="text-lg lg:text-xl font-bold col-span-5">{title}</h3>
            </div>

            <p className="col-span-8 pb-4">{description}</p>
            <div className="mt-auto flex justify-end items-center col-span-9 text-xl space-x-4">
                <FontAwesomeIcon icon={faEye} className="h-6" /> <span>{view_count}</span>
            </div>
        </Card>
    );
};

const TechnicalWriting = () => (
    <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article) => (
            <a
                key={article.id}
                href={article.canonical_url}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer flex"
            >
                <ArticleCard article={article} />
            </a>
        ))}
    </div>
);

function getArticleViewCount(id: number, defaultCount: number) {
    return fetch(`https://dev.to/api/articles/${id}`)
        .then((res) => res.json())
        .then((data) => Number(data.page_views_count) || defaultCount);
}

export default TechnicalWriting;
