import Image from 'next/image';
import { ButtonInternalLink, ButtonLink } from '../components/Button';
import HoverIcon from '../components/HoverIcon';
import { SymbolIcon } from '../components/IconSymbols';
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
                <VideoPlayer
                    src={previewVideoUrl}
                    poster={previewImgUrl}
                    className="rounded-lg overflow-hidden lg:w-full"
                />
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
            <div className="grid md:grid-cols-3 justify-center items-center gap-4 pb-8">
                <ButtonLink to={ghRepoUrl} className="flex justify-center items-center md:text-sm md:px-2">
                    <span>Github Repo</span>
                    <SymbolIcon icon="github" className="pl-2 h-6 w-6 fill-current p-0" />
                </ButtonLink>

                <ButtonLink to={hostedUrl} className="flex justify-center items-center">
                    Live Site
                    <SymbolIcon icon="external_link" className="pl-2 h-6 w-6 fill-current p-0" />
                </ButtonLink>
                <ButtonInternalLink to={`/projects/${caseStudyPath}`} className="flex justify-center items-center">
                    Case Study &rarr;
                </ButtonInternalLink>
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
        <hr className="w-48 mx-auto md:hidden" />
    </div>
);

export default ProjectPreview;
