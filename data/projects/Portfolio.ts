import { ProjectProps } from '../../interfaces/project.interface';

export const Portfolio: ProjectProps = {
    caseStudyPath: 'portfolio',
    name: 'Portfolio',
    ghRepoUrl: 'https://github.com/justin-m-morgan/justin-m-morgan.github.io',
    hostedUrl: 'https://justinmorgan.ca/',
    previewVideoUrl: '/imgs/projects/Portfolio/portfolio.mp4',
    previewImgUrl: '/imgs/projects/Portfolio/portfolio.jpg',
    previewImgHeight: 373,
    previewImgWidth: 800,
    description: 'A professional software developer portfolio built on NextJS',
    techUsed: [
        ['typescript', 'TypeScript'],
        ['react', 'ReactJS'],
        ['nextjs', 'NextJS'],
        ['tailwind', 'Tailwind'],
        ['headless', 'HeadlessUI'],
    ],
    caseStudy: [
        {
            heading: 'Consistent Styles with TailwindCSS',
            paragraphs: [
                'TailwindCSS is an increasingly popular option to manage CSS. Its popularity arises from its "utility-class" approach to styling, which provides close-to-the-metal control of your styles.',
                'With Tailwind, a global configuration file allows for centralized theming and customization. The recent addition of the just-in-time compiler allows for the addition of most pseudo-classes and elements.',
            ],
        },
        {
            heading: 'Pre-Rendered React with NextJS',
            paragraphs: [
                'NextJS offers a pre-compiled solution for building React apps, resulting in faster initial renders.',
                'Though not explored in this project, Next also supports a Server Side Generated mode for building server rendered React applications.',
            ],
        },
        {
            heading: 'Accessibile Components with Headless UI',
            paragraphs: [
                "Headless UI is a component library which is without styling-decisions. This makes it a perfect match for use with TailwindCSS, as headless can handle all the behaviours and accessibility concerns but the look and feel can perfectly mesh with your project's custom styles.",
            ],
        },
        {
            heading: 'Pre-Commit CI Pipeline with Husky CI',
            paragraphs: [
                'Using Husky CI along with git-staged enforces passing of prettier and es-lint prior to committing.',
            ],
        },
        {
            heading: 'Continuous Deployment with Vercel',
            paragraphs: [
                "Vercel's offers GitHub hook integrations, deploying new commits to the main branch. Additionally, Vercel offers preview deploys on a separate URL.",
            ],
        },
    ],
};
