export interface DevToArticle {
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

export const featuredArticles: DevToArticle[] = [
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
    {
        id: 902453,
        title: 'Loops, Array Methods, and Recursion',
        description:
            '"Loops" are an extremely powerful abstraction in computing. Loops can often be error prone and reimplement the same patterns again and again. We will investigate another approach: array-methods/functions and recursion',
        comments_count: 0,
        public_reactions_count: 10,
        page_views_count: 54,
        positive_reactions_count: 10,
        tag_list: ['javascript', 'functional'],
        canonical_url: 'https://dev.to/justin_m_morgan/loops-array-methods-and-recursion-45ng',
        reading_time_minutes: 15,
    },
];
