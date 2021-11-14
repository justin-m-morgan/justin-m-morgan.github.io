type Icon = string;
type Label = string;
type Tech = [Icon, Label];

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
}
