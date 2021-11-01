import { Button } from './Button';
import { useForm } from '@formcarry/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FormEvent } from 'react';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

const labelClasses = 'font-semibold';
const inputClasses = 'mb-3 py-3 px-4 bg-gray-900 text-gray-50 rounded-xl shadow-lg';

interface FormProps {
    submit: (event: FormEvent<HTMLFormElement>) => void;
    error: any;
}
const Form = ({ submit, error }: FormProps) => (
    <form className="flex flex-col" onSubmit={submit}>
        <h2 className="text-3xl text-center font-bold pb-8">Contact Me!</h2>

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
        {error && (
            <p className="text-red-700 text-center font-bold py-4">
                Oops, there seems to be some error! <br /> Maybe try again?
            </p>
        )}
    </form>
);

const InFlight = () => (
    <div className="flex flex-col">
        <FontAwesomeIcon icon={faTelegramPlane} className="h-48 animate-fly" />
        <p className="text-4xl font-bold text-center">Message in Flight</p>
    </div>
);

const SuccessfulSubmission = () => (
    <div className="flex flex-col text-center space-y-4 py-24">
        <FontAwesomeIcon icon={faCheckCircle} className="h-24 text-green-500" />
        <p className="text-xl font-bold">Awesome! Thanks for reaching out.</p>
    </div>
);

const ContactForm = () => {
    const { state, submit } = useForm({ id: 'YPQHWbXslKi' });
    return (
        <>
            {state.submitting ? (
                <InFlight />
            ) : state.submitted ? (
                <SuccessfulSubmission />
            ) : (
                <Form submit={submit} error={state.error} />
            )}
        </>
    );
};

export default ContactForm;
