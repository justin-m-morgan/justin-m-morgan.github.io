import { ProjectProps } from '../../interfaces/project.interface';

export const ProductFeedback: ProjectProps = {
    caseStudyPath: 'product-feedback',
    name: 'Product Feedback Board',
    ghRepoUrl: 'https://github.com/justin-m-morgan/product-feedback',
    hostedUrl: 'https://fem-product-feedback.netlify.app/',
    previewVideoUrl: '/imgs/projects/ProductFeedback/Storybook.mp4',
    previewImgUrl: '/imgs/projects/ProductFeedback/Storybook.jpg',
    previewImgHeight: 944,
    previewImgWidth: 957,
    description:
        '(IN PROGRESS) The Product Feedback challenge is a mock product support page, whereby users can request, discuss, and upvote product ideas for the underlying product. The project is built using NestJS for the backend and React for the frontend.',
    techUsed: [
        ['nextjs', 'NextJS'],
        ['react', 'React'],
        ['typescript', 'TypeScript'],
        ['css', 'Modules'],
        ['graphql', 'GraphQL'],
        ['storybook', 'Storybook'],
        ['jest', 'Jest'],
    ],
    caseStudy: [
        // {
        //     heading: 'CSS Modules',
        //     paragraphs: [
        //         'This app employs CSS Modules as its styling solution. This decision was made to strengthen my skills at architecting a project wide CSS solution.',
        //         'CSS Modules allow for component scoped styles. This lessens the need for CSS architectural patterns (such as BEM), as style definitions generally have to be explicitly shared (unlike ordinary global CSS patterns).',
        //     ],
        // },
    ],
};
