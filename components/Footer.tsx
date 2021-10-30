import Card from './Card';
import { Dev, Github, Linkedin, Twitter } from './SocialMedia';

const Icon = ({ children, color }: { children: React.ReactNode; color: string }) => (
    <button
        className={`bg-white ${color} shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2`}
        type="button"
    >
        {children}
    </button>
);

const icons = [Twitter, Linkedin, Github, Dev];

const Footer = () => (
    <footer id="footer" className="relative px-48 pb-48 grid grid-cols-2 gap-8">
        <div className="">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">Let&apos;s keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">Find me on any of these platforms:</h5>
            <div className="mt-6 lg:mb-0 mb-6 flex space-x-4">
                {icons.map((Icon, i) => (
                    <Icon key={i} />
                ))}
            </div>
        </div>
        <Card>
            <div className="flex flex-col justify-center items-center">
                <p className="text-2xl text-center font-bold">
                    This will be a form. Until that time, I can be contacted at{' '}
                    <a
                        className="text-blue-800 underline"
                        href="mailto:justin.morgan@hey.com?subject=Reaching+Out+Via+Your+Portfolio+Page"
                    >
                        justin.morgan@hey.com
                    </a>
                </p>
            </div>
        </Card>
    </footer>
);

export default Footer;
