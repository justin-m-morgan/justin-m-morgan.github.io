import UnderConstruction from '../../components/UnderConstruction';
import { ProjectPreviewProps } from '../../sections/ProjectPreview';

export const ClockAppPreview: ProjectPreviewProps = {
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
};

export default function ClockApp() {
    return (
        <div>
            <UnderConstruction />
        </div>
    );
}
