import Image from 'next/image';
import { ButtonInternalLink, ButtonLink } from '../components/Button';
import HoverIcon from '../components/HoverIcon';
import { SymbolIcon } from '../components/IconSymbols';
import { Github } from '../components/SocialMedia';
import VideoPlayer from '../components/VideoPlayer';
import { ProjectProps } from '../interfaces/project.interface';

const ProjectPreview = ({
    caseStudyPath,
    name,
    ghRepoUrl,
    hostedUrl,
    previewVideoUrl,
    previewImgUrl,
    previewImgHeight,
    previewImgWidth,
    description,
    techUsed,
}: ProjectProps) => (
    <div className="grid lg:grid-cols-2 gap-8 mb-8 max-w-lg lg:max-w-full mx-auto">
        <div className="rounded-lg overflow-hidden  flex justify-center items-center">
            {previewVideoUrl ? (
                <VideoPlayer src={previewVideoUrl} className="rounded-lg overflow-hidden lg:w-full" />
            ) : (
                <Image
                    src={previewImgUrl}
                    alt={name}
                    height={previewImgHeight}
                    width={previewImgWidth}
                    className="object-cover"
                />
            )}
        </div>
        <div className="text-center flex flex-col place-content-center">
            <h3 className="text-4xl font-bold pb-4">{name}</h3>
            <p className="pb-8">{description}</p>
            <div className="flex flex-col md:flex-row justify-center items-center space-x-4 pb-8">
                <ButtonLink to={ghRepoUrl} className="flex items-center">
                    <Github url="#" className="h-6 pr-3" />
                    <span>Github Repo</span>
                </ButtonLink>

                <ButtonLink to={hostedUrl}>Live Site</ButtonLink>
                <ButtonInternalLink to={`/projects/${caseStudyPath}`}>Case Study &rarr;</ButtonInternalLink>
            </div>
            <div className="flex flex-col items-center">
                <h4 className="text-lg font-bold pb-4">Technology Used</h4>
                <div className="flex space-x-3">
                    {techUsed.map(([icon, label]) => (
                        <HoverIcon key={label} icon={icon} label={label} />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default ProjectPreview;
