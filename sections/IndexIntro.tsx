import { ButtonInternalLink } from '../components/Button';

const IndexIntro = () => (
    <>
        <p className="text-4xl md:text-5xl lg:text-7xl py-8 max-w-xl lg:max-w-4xl font-bold leading-tight">
            Curious developer who is passionate about building digital communities
        </p>

        <div className="flex justify-center md:justify-start mt-8 md:mt-12">
            <ButtonInternalLink to="#footer">Contact Me</ButtonInternalLink>
        </div>
    </>
);

export default IndexIntro;
