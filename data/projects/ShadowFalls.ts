import { ProjectProps } from '../../interfaces/project.interface';

export const ShadowFalls: ProjectProps = {
    caseStudyPath: 'shadow-falls',
    name: 'Shadow Falls Campground',
    ghRepoUrl: 'https://github.com/justin-m-morgan/shadowfallscampground',
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
        // {
        //     heading: 'CSS Modules',
        //     paragraphs: [
        //         'This app employs CSS Modules as its styling solution. This decision was made to strengthen my skills at architecting a project wide CSS solution.',
        //         'CSS Modules allow for component scoped styles. This lessens the need for CSS architectural patterns (such as BEM), as style definitions generally have to be explicitly shared (unlike ordinary global CSS patterns).',
        //     ],
        // },
    ],
};
