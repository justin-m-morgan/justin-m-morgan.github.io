import { ClockAppProject, JobBoardProject, OrderSummaryProject, Portfolio } from '../data/projects';

import ProjectPreview from './ProjectPreview';

const Projects = () => (
    <div className="md:space-y-24">
        <ProjectPreview {...Portfolio} />
        <ProjectPreview {...ClockAppProject} />
        <ProjectPreview {...JobBoardProject} />
        <ProjectPreview {...OrderSummaryProject} />
    </div>
);

export default Projects;
