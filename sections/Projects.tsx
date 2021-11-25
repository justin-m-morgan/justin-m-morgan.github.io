import { ClockAppProject, ShadowFalls, JobBoardProject, ProductFeedback, Portfolio } from '../data/projects';
import ProductFeedbackProject from '../pages/projects/product-feedback';

import ProjectPreview from './ProjectPreview';

const Projects = () => (
    <div className="md:space-y-24">
        <ProjectPreview {...ShadowFalls} />
        <ProjectPreview {...Portfolio} />
        <ProjectPreview {...ProductFeedback} />
        <ProjectPreview {...ClockAppProject} />
        <ProjectPreview {...JobBoardProject} />
    </div>
);

export default Projects;
