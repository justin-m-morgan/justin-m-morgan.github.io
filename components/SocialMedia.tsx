import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faDev, IconDefinition } from '@fortawesome/free-brands-svg-icons';

interface IconProps {
    className?: string;
    icon: IconDefinition;
    url: string;
}
const FaIcon = ({ icon, className = 'h-12', url }: IconProps) => (
    <a href={url} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon} className={className} />
    </a>
);

interface CustomizedSocial {
    className?: string;
}
export const Twitter = ({ className }: CustomizedSocial) => (
    <FaIcon className={className} icon={faTwitter} url="https://twitter.com/_catsonfilm" />
);
export const Github = ({ className }: CustomizedSocial) => (
    <FaIcon className={className} icon={faGithub} url="https://github.com/justin-m-morgan" />
);
export const Linkedin = ({ className }: CustomizedSocial) => (
    <FaIcon className={className} icon={faLinkedin} url="https://linkedin.com/in/justinmatthewmorgan" />
);
export const Dev = ({ className }: CustomizedSocial) => (
    <FaIcon className={className} icon={faDev} url="https://dev.to/justin_m_morgan" />
);
