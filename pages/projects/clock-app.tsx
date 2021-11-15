import ProjectCaseStudy from '../../components/ProjectCaseStudy';
import { ProjectProps } from '../../interfaces/project.interface';

export const ClockAppProject: ProjectProps = {
    caseStudyPath: 'clock-app',
    name: 'Clock App',
    ghRepoUrl: 'https://github.com/justin-m-morgan/fem_clock-app',
    hostedUrl: 'https://fem-clock-app.vercel.app/',
    previewVideoUrl: '/imgs/projects/ClockApp/clock_app.mp4',
    previewImgUrl: '/imgs/projects/ClockApp/screenshot_desktop--day-active.jpg',
    previewImgHeight: 414,
    previewImgWidth: 600,
    description:
        'A multi-aspect clock app. Background image and theme are responsive to portion of the day (day/evening). Fetches quotes, time-zone, and calendar information from separate external APIs and built from a Figma design file.',
    techUsed: [
        ['typescript', 'TypeScript'],
        ['react', 'ReactJS'],
        ['reactquery', 'React Query'],
        ['nextjs', 'NextJS'],
        ['css', 'CSS Modules'],
    ],
    caseStudy: [
        {
            heading: 'CSS Modules',
            paragraphs: [
                'This app employs CSS Modules as its styling solution. This decision was made to strengthen my skills at architecting a project wide CSS solution.',
                'CSS Modules allow for component scoped styles. This lessens the need for CSS architectural patterns (such as BEM), as style definitions generally have to be explicitly shared (unlike ordinary global CSS patterns).',
            ],
        },
        {
            heading: 'Theming with CSS Custom Properties',
            paragraphs: [
                'With the use of global styles drastically reduced (in favour of CSS modules), global styles were primarily constrained to global baseline styles and theming.',
                'This project requied both a day and night theme. In order to accomplish this, I employed CSS custom properties within my components. Components which needed to toggle between two values were set as CSS properties on elements that are children to a `data` property set on the parent component. By toggling this property, all children can match on its state and determine which property should be used at the local level.',
            ],
        },
        {
            heading: 'API Requests with React-Query',
            paragraphs: [
                'The app consumes three separate APIs: a random quote generator, a local time-data API, and a calendar-data API. The latter two are stitched together sequentially, with the geolocation being used as a parameters as part of the subsequent request.',
                "External requests are managed using the React-Query library. This library manages caching, errors, retries, timed-gapped repetitions and provides a well thought-out hook-based API using the React's Context API under the hood.",
            ],
        },
        {
            heading: 'From Design File to Interactive App',
            paragraphs: [
                'This project was a challenge provided by FrontendMentor.io whereby a Figma is provided, along with some static assets and the developer must make all remaining implementation decesions.',
            ],
        },
    ],
};

const ClockApp = () => <ProjectCaseStudy {...ClockAppProject} />;

export default ClockApp;
