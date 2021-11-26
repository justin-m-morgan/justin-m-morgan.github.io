import { ProjectProps } from '../../interfaces/project.interface';

export const ShadowFalls: ProjectProps = {
    caseStudyPath: 'shadow-falls',
    name: 'Shadow Falls Campground',
    ghRepoUrl: 'https://github.com/justin-m-morgan/shadowfalls',
    hostedUrl: 'https://shadowfallscampground.herokuapp.com',
    previewVideoUrl: '/imgs/projects/ShadowFalls/IndexPage.mp4',
    previewImgUrl: '/imgs/projects/ShadowFalls/IndexPage.jpg',
    previewImgHeight: 905,
    previewImgWidth: 955,
    description:
        'Shadow Falls is an LGBTQ campground located in Harrison Mills, BC. It is owned and operated by my partner and myself. Along with providing information to potential campers, it also handles accepting of reservation requests, generating HTML emails.',
    techUsed: [
        ['elixir', 'Elixir'],
        ['phoenix', 'Phoenix'],
        ['tailwind', 'Tailwind'],
    ],
    caseStudy: [
        {
            heading: 'Near SPA-level experience w/ Phoenix LiveView',
            paragraphs: [
                'Phoenix LiveView is a relatively recent addition to the Phoenix framework (only being included in the core package since the middle of 2021). It allows for component driven development of user interfaces coupled with the advantages of modularized dynamic updates familiar to those in Javascript-framework communities.',
                'Unlike a typical Javascript framework, initial rendering occurs on the server, dynamic regions marked for precise modification, and state maintained via a persistent web-socket connection between client and server.',
            ],
        },
        {
            heading: 'Theme-driven styling w/ Tailwind',
            paragraphs: [
                'TailwindCSS approaches application-styling with "utility classes"--small, composable style snippets that encourage consistency across an application and can be updated via a global configuration file.',
                'To avoid "class-soup" throughout the code base, this project attempts to extract generic UI components for consumption/composition in the domain components.',
            ],
        },
    ],
};
