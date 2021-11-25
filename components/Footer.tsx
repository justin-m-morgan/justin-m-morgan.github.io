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
        <footer
            id="footer"
            className="md:px-6 container pb-16 md:pb-24 lg:pb-48 
                flex flex-col
                md:grid gap-4 md:grid-cols-2 md:grid-rows-2 grid-flow-col
                text-center"
        >
            <Modal title="Contact Me!" isOpen={isOpen} setIsOpen={setIsOpen}>
                <ContactForm />
            </Modal>

            <h4 className="text-3xl font-bold text-gray-50">Find me on any of these platforms</h4>

            <div className="lg:mb-0 flex justify-center space-x-4">
                {icons.map((Icon, i) => (
                    <Icon key={i} />
                ))}
            </div>

            <h4 className="text-3xl font-bold">Or send me an email!</h4>
            <div>
                <Button onClick={() => setIsOpen(true)}>Send Message</Button>
            </div>
        </footer>
    );
};

export default Footer;
