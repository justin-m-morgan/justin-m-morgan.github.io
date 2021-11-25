import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from './SocialMedia';
import VideoPlayer from './VideoPlayer';
import {
    ProjectIntroProps,
    ProjectProps,
    ProjectSection,
    Tech,
    VideoPreviewProps,
} from '../interfaces/project.interface';
import { SymbolIcon } from './IconSymbols';

const ProjectCaseStudy = ({
    name,
    ghRepoUrl,
    previewVideoUrl,
    hostedUrl,
    description,
    previewImgUrl,
    previewImgHeight,
    previewImgWidth,
    techUsed,
    caseStudy,
}: ProjectProps) => (
    <section className="px-2 mt-12 pb-12 md:pb-24 md:px-6 container max-w-8xl  mx-auto flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <Intro ghRepoUrl={ghRepoUrl} hostedUrl={hostedUrl} name={name} description={description} />
        <VideoPreview
            name={name}
            previewVideoUrl={previewVideoUrl}
            previewImgUrl={previewImgUrl}
            previewImgHeight={previewImgHeight}
            previewImgWidth={previewImgWidth}
        />

        <TechUsed techUsed={techUsed} />

        {caseStudy.map((section) => (
            <ProjectSection key={section.heading} {...section} />
        ))}
        <hr className="md:col-span-2" />
    </section>
);

const Intro = ({ name, description, ghRepoUrl, hostedUrl }: ProjectIntroProps) => (
    <div className="mt-12">
        <h1 className="text-5xl md:text-8xl font-bold text-center pb-12">{name}</h1>
        <p className="text-xl font-bold leading-relaxed pb-8">{description}</p>
        <div className="flex justify-center space-x-4">
            <Github label="GitHub" url={ghRepoUrl} className="h-8" />
            <ExternalLink url={hostedUrl} label="Live Site" className="h-8" />
        </div>
    </div>
);

const VideoPreview = ({
    name,
    previewVideoUrl,
    previewImgUrl,
    previewImgHeight,
    previewImgWidth,
}: VideoPreviewProps) => (
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
);

const TechUsed = ({ techUsed }: { techUsed: Tech[] }) => (
    <div>
        <h2 className="text-2xl md:text-4xl font-bold pb-4">Technology Used</h2>
        <div className="grid grid-cols-2 gap-4">
            {techUsed.map(([icon, label]) => (
                <div key={label} className="flex space-x-4 items-center">
                    <SymbolIcon icon={icon} className="w-8 h-8" />
                    <span className="font-bold  md:text-xl">{label}</span>
                </div>
            ))}
        </div>
    </div>
);

const ProjectSection = ({ heading, paragraphs }: ProjectSection) => (
    <section className="leading-relaxed space-y-4 place-self-start">
        <h2 className="text-4xl font-bold">{heading}</h2>
        {paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
    </section>
);

export default ProjectCaseStudy;
