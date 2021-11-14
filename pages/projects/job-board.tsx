import ProjectCaseStudy from '../../components/ProjectCaseStudy';
import UnderConstruction from '../../components/UnderConstruction';
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
    techUsed: [['react', 'ReactJS']],
};

export default function ClockApp() {
    return (
        <ProjectCaseStudy {...JobBoardProject}>
            <UnderConstruction />
        </ProjectCaseStudy>
    );
}
