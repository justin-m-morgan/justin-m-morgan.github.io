import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from './SocialMedia';
import VideoPlayer from './VideoPlayer';
import { ProjectProps } from '../interfaces/project.interface';
import { SymbolIcon } from './IconSymbols';

interface ProjectCaseStudyProps extends ProjectProps {
    children: React.ReactNode;
}

const ProjectCaseStudy = ({
    children,
    name,
    ghRepoUrl,
    previewVideoUrl,
    hostedUrl,
    description,
    previewImgUrl,
    previewImgHeight,
    previewImgWidth,
    techUsed,
}: ProjectCaseStudyProps) => (
    <section className="container max-w-8xl mt-12 mx-auto grid grid-cols-2 gap-8 items-center">
        <div>
            <h1 className="text-8xl font-bold text-center mt-24 pb-12">{name}</h1>
            <div className="flex justify-center space-x-4">
                <Github label="GitHub" url={ghRepoUrl} className="h-8" />
                <ExternalLink url={hostedUrl} label="Live Site" className="h-8" />
            </div>
        </div>

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

        <p className="text-xl leading-loose">{description}</p>

        <div>
            <h2 className="text-4xl font-bold pb-4">Technology Used</h2>
            <div className="flex flex-col space-y-3">
                {techUsed.map(([icon, label]) => (
                    <div key={label} className="flex space-x-4 items-center">
                        <SymbolIcon icon={icon} className="w-8 h-8" />
                        <span className="font-bold text-xl">{label}</span>
                    </div>
                ))}
            </div>
        </div>

        <div className="col-span-2">{children}</div>
    </section>
);

export default ProjectCaseStudy;
