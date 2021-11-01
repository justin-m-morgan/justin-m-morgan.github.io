import { useState } from 'react';
import ContactForm from './ContactForm';
import Modal from './Modal';
import { Dev, Github, Linkedin, Twitter } from './SocialMedia';
import { Button } from './Button';

const Icon = ({ children, color }: { children: React.ReactNode; color: string }) => (
    <button
        className={`bg-white ${color} shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2`}
        type="button"
    >
        {children}
    </button>
);

const icons = [Twitter, Linkedin, Github, Dev];

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <footer
                id="footer"
                className="px-24 md:px-8 lg:px-36 xl:px-48 max-w-8xl mx-auto pb-24 lg:pb-48 flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 grid-flow-col items-center space-y-4 md:space-y-0 text-center"
            >
                <Modal title="Contact Me!" isOpen={isOpen} setIsOpen={setIsOpen}>
                    <ContactForm />
                </Modal>

                <h4 className="text-center text-lg text-gray-50">Find me on any of these platforms</h4>

                <div className="lg:mb-0 flex justify-center space-x-4">
                    {icons.map((Icon, i) => (
                        <Icon key={i} />
                    ))}
                </div>

                <h4 className="text-lg">Or send me an email!</h4>
                <div>
                    <Button onClick={() => setIsOpen(true)}>Send Message</Button>
                </div>
            </footer>
        </>
    );
};

export default Footer;
