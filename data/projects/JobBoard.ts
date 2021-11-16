import { ProjectProps } from '../../interfaces/project.interface';

export const JobBoardProject: ProjectProps = {
    caseStudyPath: 'job-board',
    name: 'Filtering Job Board',
    ghRepoUrl: 'https://github.com/justin-m-morgan/fem_static-job-listings',
    hostedUrl: 'https://fem-static-job-listings-8lxpgh5ye-justin-m-morgan.vercel.app/',
    previewVideoUrl: '/imgs/projects/JobBoard/jobboard.mp4',
    previewImgUrl: '/imgs/projects/JobBoard/screenshot_desktop_filters.png',
    previewImgHeight: 904,
    previewImgWidth: 1204,
    description:
        'A job board with the ability to apply and remove cumulative filters. A challenge project from Frontend Mentors. Implemented from a Figma design file.',
    techUsed: [
        ['react', 'ReactJS'],
        ['tailwind', 'TailwindCSS'],
        ['nextjs', 'NextJS'],
    ],
    caseStudy: [
        {
            heading: 'Overview',
            paragraphs: [
                'This project is a fictional job-board. The project consists of one page, listing all of the 10 provided jobs in the data-set. The job listings can be filtered by their "tags" (role, level, languages, and/or tools). Upon selecting a filter, a filter summary/manangement panel appears at the top of the list. Multiple filters can be applied and filters can be removed from the management panel. Duplicate filters are excluded and the filters appear in the order they are selected.',
            ],
        },
        {
            heading: 'State Management with useReducer',
            paragraphs: [
                'In order to manage a shared state across two branches of the component tree, I made use of an orchestrating parent component and the useReducer hook provided by React. In the context, I decided to provide appropriate dispatch functions to each of my component brances via props rather than relying on context (which I felt would have been overboard). I designed my component tree to minimize the amount of "prop-drilling" that would be required to accomplish this.',
            ],
        },
        {
            heading: 'Continuous Deployment with Vercel',
            paragraphs: [
                "This project employs a continuous deployment strategy using Vercel's Next-tailored deploy workflow. NextJS offers a productive solution to using React for static websitesUsing this workflow, preview deploys are generated from pull requests and rebuilds are triggered upon merging pull requests into the master/main branch on GitHub.",
            ],
        },
    ],
};
