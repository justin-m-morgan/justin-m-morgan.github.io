import { ProjectProps } from '../../interfaces/project.interface';

export const OrderSummaryProject: ProjectProps = {
    caseStudyPath: 'order-summary',
    name: 'Order Summary Card',
    ghRepoUrl: 'https://github.com/justin-m-morgan/fem_order-summary-component',
    hostedUrl: 'https://justin-m-morgan.github.io/fem_order-summary-component/',
    previewImgUrl: '/imgs/projects/OrderSummary/screenshot_desktop.png',
    previewImgHeight: 1274,
    previewImgWidth: 1361,
    description: 'A purely static implementation of a design challenge from Frontend Mentors.',
    techUsed: [
        ['tailwind', 'TailwindCSS'],
        ['html', 'HTML'],
    ],
    caseStudy: [
        {
            heading: 'Overview',
            paragraphs: ['A static HTML implemenation of from a Figma design file.'],
        },
        {
            heading: 'Tailwind/PostCSS pipeline',
            paragraphs: [
                'TailwindCSS is a utility-class based CSS library. It offers a CLI for live-reloading and additional tooling without requiring an additional build tool. Making use of Tailwind requires a thorough understanding of CSS, as the utilities provide normalization with little abstraction. Normalization occurs in several ways: implementing a PostCSS build-pipeline to provide fixes, resets, vendor-prefixes, and others benefiets; resetting many frustrating default stylings, such as link styles, list styles, margin/padding, etc with the Preflight base styles; providing a fixed set of spacing, sizing, and color classes, encouraging project-wide consistency.',
            ],
        },
        {
            heading: 'Theming with TailwindCSS',
            paragraphs: [
                'Established the project requirements via the Tailwind configuration file. This included establishing the project color palatte, the urls of the provided images, and including the required font.',
            ],
        },
        {
            heading: 'Mobile First design',
            paragraphs: [
                'TailwindCSS encourages taking a mobile-first approach to design by providing responsive prefixes to all of its utility classes',
            ],
        },
    ],
};
