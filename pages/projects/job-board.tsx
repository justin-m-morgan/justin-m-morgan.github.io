import ProjectCaseStudy from '../../components/ProjectCaseStudy';
import { JobBoardProject } from '../../data/projects';

export default function ClockApp() {
    return <ProjectCaseStudy {...JobBoardProject} />;
}
