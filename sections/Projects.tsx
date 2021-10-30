import { ClockAppPreview } from '../pages/projects/clock-app';
import { OrderSummaryPreview } from '../pages/projects/order-summary';
import { JobBoardPreview } from '../pages/projects/job-board';
import ProjectPreview from './ProjectPreview';

const Projects = () => (
    <>
        <ProjectPreview {...ClockAppPreview} />
        <ProjectPreview {...JobBoardPreview} />
        <ProjectPreview {...OrderSummaryPreview} />
    </>
);

export default Projects;
