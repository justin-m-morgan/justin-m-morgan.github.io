import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedin, faDev, IconDefinition } from '@fortawesome/free-brands-svg-icons';

interface IconProps {
    className?: string;
    icon: IconDefinition;
    url: string;
    label?: string;
}
const FaIcon = ({ icon, label, className = 'h-12', url }: IconProps) => (
    <a href={url} target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-2">
        <FontAwesomeIcon icon={icon} className={className} />
        {label && <span>{label}</span>}
    </a>
);

const urls = {
    twitter: 'https://twitter.com/_catsonfilm',
    linkedin: 'https://linkedin.com/in/justinmatthewmorgan',
    github: 'https://github.com/justin-m-morgan',
    dev: 'https://dev.to/justin_m_morgan',
    external: '#',
};

interface CustomizedSocial {
    className?: string;
    label?: string;
    url?: string;
}
export const Twitter = ({ className, label }: CustomizedSocial) => (
    <FaIcon className={className} label={label} icon={faTwitter} url={urls.twitter} />
);
export const Linkedin = ({ className, label }: CustomizedSocial) => (
    <FaIcon className={className} label={label} icon={faLinkedin} url={urls.linkedin} />
);
export const Dev = ({ className, label }: CustomizedSocial) => (
    <FaIcon className={className} label={label} icon={faDev} url={urls.dev} />
);
export const Github = ({ className, url = urls.github, label }: CustomizedSocial) => (
    <FaIcon className={className} label={label} icon={faGithub} url={url} />
);
export const ExternalLink = ({ className, url = urls.external, label }: CustomizedSocial) => (
    <FaIcon className={className} label={label} icon={faExternalLinkAlt} url={url} />
);
