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
        {
            heading: 'GraphQL Backend w/ NestJS',
            paragraphs: [
                'The backend is built using the increasingly popular NestJS framework. Nest has provided a custom integration with Apollo Server that makes it relatively easy to generate a GraphQl API from the "Nest-way" of building an app.',
                'The API is currently hosted on Heroku and has functioning read operations. Mutations have not yet been implemented.',
                'The API can be examined using the GraphQL playground, hosted at: https://fem-product-feedback.herokuapp.com/graphql',
            ],
        },
        {
            heading: 'Component-Driven Design w/ Storybook',
            paragraphs: [
                'Storybook is a library that provides a development workspace for isolated components. At its core, Storybook facilitate developing from the atomic elements of your app and encouraging their composition and decoupling from application concerns. Additionally, it offers plugins that increase developer productivity, such as preset-viewport preview toggling at the component level, component state toggling, UI for manipulating component state, and many more.',
                'The atomic components of this application are complete (for desktop specifications) and some work has been done to start composing these components together into composite components and pages.',
            ],
        },
    ],
};
