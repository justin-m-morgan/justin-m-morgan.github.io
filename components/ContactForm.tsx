import { Button } from './Button';
import { useForm } from '@formcarry/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const labelClasses = 'font-semibold';
const inputClasses = 'mb-3 py-3 px-4 bg-gray-50 rounded-xl shadow-md';

const ContactForm = () => {
    const { state, submit } = useForm({ id: 'YPQHWbXslKi' });
    return (
        <>
            {true ? (
                <div className="flex flex-col text-center space-y-4 py-24">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-24 text-green-500" />
                    <p className="text-xl font-bold">Awesome! Thanks for reaching out.</p>
                </div>
            ) : (
                <form className="flex flex-col" onSubmit={submit}>
                    <h2 className="text-3xl font-bold pb-8">Contact Me!</h2>

                    <label htmlFor="preferred_name" className={labelClasses}>
                        Your Name
                    </label>
                    <input type="text" name="preferred_name" id="preferred_name" className={`${inputClasses}`} />

                    <label className={labelClasses} htmlFor="email">
                        Contact Email
                    </label>
                    <input type="email" name="email" id="email" className={`${inputClasses}`} />

                    <label className={labelClasses} htmlFor="message">
                        Message
                    </label>
                    <textarea name="message" id="message" rows={8} className={`${inputClasses}`} />
                    <Button type="submit" className="bg-gray-900 text-gray-50 font-bold">
                        Send Message
                    </Button>
                </form>
            )}
        </>
    );
};

export default ContactForm;
