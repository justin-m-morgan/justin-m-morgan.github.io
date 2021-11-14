import Image from 'next/image';
import { ButtonInternalLink, ButtonLink } from '../components/Button';
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
            <h3 className="text-2xl font-bold pb-4">{name}</h3>
            <p className="pb-8">{description}</p>
            <div className="flex justify-center space-x-4">
                <ButtonLink to={hostedUrl}>Live Site</ButtonLink>
                <ButtonInternalLink to={`/projects/${caseStudyPath}`}>Case Study &rarr;</ButtonInternalLink>
            </div>
        </div>
    </div>
);

export default ProjectPreview;
