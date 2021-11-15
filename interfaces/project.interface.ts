type Icon = string;
type Label = string;
export type Tech = [Icon, Label];

export interface ProjectSection {
    heading: string;
    paragraphs: string[];
}

export interface ProjectProps {
    caseStudyPath: string;
    name: string;
    ghRepoUrl: string;
    hostedUrl: string;
    previewVideoUrl?: string;
    previewImgUrl: string;
    previewImgHeight: number;
    previewImgWidth: number;
    description: string;
    techUsed: Tech[];
    caseStudy: ProjectSection[];
}

export type ProjectIntroProps = Pick<ProjectProps, 'name' | 'description' | 'ghRepoUrl' | 'hostedUrl'>;

export type VideoPreviewProps = Pick<
    ProjectProps,
    'name' | 'previewImgHeight' | 'previewImgWidth' | 'previewImgUrl' | 'previewVideoUrl'
>;
