import { ClockAppProject } from '../pages/projects/clock-app';
import { JobBoardProject } from '../pages/projects/job-board';
import { OrderSummaryProject } from '../pages/projects/order-summary';
import ProjectPreview from './ProjectPreview';

const Projects = () => (
    <div className="md:space-y-24">
        <ProjectPreview {...ClockAppProject} />
        <ProjectPreview {...JobBoardProject} />
        <ProjectPreview {...OrderSummaryProject} />
    </div>
);

export default Projects;
