import Image from 'next/image';
import { ButtonInternalLink, OutlineButtonStyles } from '../components/Button';
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
    <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="rounded-lg overflow-hidden max-w-2xl h-96 flex justify-center items-center">
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
                                    objectFit: 'contain',
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
        <div className="flex flex-col place-content-center px-12">
            <h3 className="text-2xl font-bold pb-4">{name}</h3>
            <p className="pb-8">{description}</p>
            <ButtonInternalLink to={`/projects/${caseStudyPath}`}>Case Study &rarr;</ButtonInternalLink>
        </div>
    </div>
);

export default ProjectPreview;
