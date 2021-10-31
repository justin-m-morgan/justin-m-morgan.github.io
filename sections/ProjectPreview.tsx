import Image from 'next/image';
import { ButtonInternalLink, ButtonLink, OutlineButtonStyles } from '../components/Button';
import ReactPlayer from 'react-player';

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
    <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="rounded-lg overflow-hidden max-w-lg transform -translate-x-2 md: translate-x-0 mx-auto h-96 flex justify-center items-center">
            {previewVideoUrl ? (
                <ReactPlayer
                    url={previewVideoUrl}
                    playing={true}
                    loop={true}
                    muted={true}
                    config={{
                        file: {
                            attributes: {
                                style: {
                                    height: '100%',
                                    width: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center center',
                                    borderRadius: '8px',
                                },
                            },
                        },
                    }}
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
        <div className="flex flex-col place-content-center">
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
