import { useState } from 'react';
import Card from './Card';
import ContactForm from './ContactForm';
import Modal from './Modal';
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

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <footer id="footer" className="relative px-48 pb-48 grid grid-cols-2 gap-8">
                <Modal title="Contact Me!" isOpen={isOpen} setIsOpen={setIsOpen}>
                    <ContactForm />
                </Modal>
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
                    <button onClick={() => setIsOpen(true)}>Open modal</button>
                </Card>
            </footer>
        </>
    );
};

export default Footer;
