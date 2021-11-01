import Image from 'next/image';
import { ButtonInternalLink, ButtonLink } from '../components/Button';

interface VideoPlayerProps {
    className?: string;
    src: string;
}
const VideoPlayer = ({ className, src }: VideoPlayerProps) => (
    <video
        src={src}
        playsInline={true}
        preload="auto"
        autoPlay={true}
        loop={true}
        muted={true}
        className={className}
    ></video>
);
export interface ProjectPreviewProps {
    caseStudyPath: string;
    name: string;
    ghRepoUrl: string;
    hostedUrl: string;
    previewVideoUrl?: string;
    previewImgUrl: string;
    previewImgHeight: number;
    previewImgWidth: number;
    description: string;
}

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
}: ProjectPreviewProps) => (
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
