import ProjectCaseStudy from '../../components/ProjectCaseStudy';
import UnderConstruction from '../../components/UnderConstruction';
import { ProjectProps } from '../../interfaces/project.interface';

export const OrderSummaryProject: ProjectProps = {
    caseStudyPath: 'order-summary',
    name: 'Order Summary Card',
    ghRepoUrl: 'https://github.com/justin-m-morgan/fem_order-summary-component',
    hostedUrl: 'https://justin-m-morgan.github.io/fem_order-summary-component/',
    previewImgUrl: '/imgs/projects/OrderSummary/screenshot_desktop.png',
    previewImgHeight: 1274,
    previewImgWidth: 1361,
    description: 'A purely static implementation of a design challenge from Frontend Mentors.',
    techUsed: [],
};

export default function ClockApp() {
    return (
        <ProjectCaseStudy {...OrderSummaryProject}>
            <UnderConstruction />
        </ProjectCaseStudy>
    );
}
