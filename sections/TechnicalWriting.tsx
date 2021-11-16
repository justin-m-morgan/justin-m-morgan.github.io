import Card from '../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { DevToArticle, featuredArticles } from '../data/articles';

interface ArticleProps {
    article: DevToArticle;
}
const ArticleCard = ({ article: { title, description, page_views_count } }: ArticleProps) => {
    return (
        <Card className="flex flex-col">
            <div className="flex items-center space-x-4 pb-4">
                <FontAwesomeIcon icon={faDev} className="h-8 md:h-16" />
                <h3 className="text-lg lg:text-xl font-bold col-span-5">{title}</h3>
            </div>

            <p className="col-span-8 pb-4">{description}</p>
            <div className="mt-auto flex justify-end items-center col-span-9 text-xl space-x-4">
                <FontAwesomeIcon icon={faEye} className="h-6" /> <span>{page_views_count}</span>
            </div>
        </Card>
    );
};

const TechnicalWriting = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
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
};

// TODO: Update view count on pre-render
// export function updateArticlesViewCount(articles: DevToArticle[]) {
//     const dev_api_key = process.env.DEV_API_KEY || '';
//     const headers = new Headers({
//         'api-key': dev_api_key,
//     });

//     return fetch(`https://dev.to/api/articles/me`, {
//         mode: 'cors',
//         headers,
//     })
//         .then((res) => res.json())
//         .then((fetchedArticles) => {
//             console.log(fetchedArticles);
//             return fetchedArticles.reduce((acc: DevToArticle[], fetchedArticle: DevToArticle) => {
//                 let matchedArticle = articles.find(({ id }) => id == fetchedArticle.id);
//                 return [...acc, { ...matchedArticle, page_views_count: fetchedArticle.page_views_count }];
//             }, []);
//         });
// }

export default TechnicalWriting;
