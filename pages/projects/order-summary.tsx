import ProjectCaseStudy from '../../components/ProjectCaseStudy';
import { OrderSummaryProject } from '../../data/projects';

export default function ClockApp() {
    return <ProjectCaseStudy {...OrderSummaryProject} />;
}
