import Card from '../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

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
        page_views_count: 525,
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
        page_views_count: 322,
        positive_reactions_count: 9,
        tag_list: ['javascript', 'arity', 'functional', 'cleancode'],
        canonical_url: 'https://dev.to/justin_m_morgan/a-deeper-dive-into-function-arity-with-a-focus-on-javascript-ae',
        reading_time_minutes: 10,
    },
];

const TechnicalWriting = () => (
    <div className="grid grid-cols-2 gap-8">
        {articles.map((article) => (
            <a key={article.id} href={article.canonical_url} className="cursor-pointer flex">
                <Card className="grid grid-cols-9 grid-flow-row-dense">
                    <FontAwesomeIcon icon={faDev} className="h-12 row-span-2" />
                    <h3 className="text-xl font-bold col-span-8">{article.title}</h3>
                    <p className="col-span-8 pb-4">{article.description}</p>
                    <div className="flex justify-end items-center col-span-9 text-xl space-x-4">
                        <FontAwesomeIcon icon={faEye} className="h-6" /> <span>{article.page_views_count}</span>
                    </div>
                </Card>
            </a>
        ))}
    </div>
);
export default TechnicalWriting;
