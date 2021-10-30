import { ButtonLink, OutlineButtonStyles } from '../components/Button';
import Card from '../components/Card';
import { Exercism } from '../components/svg';
import Image from 'next/image';

interface Testimonial {
    avatar: string;
    name: string;
    position?: string;
    linkedIn?: string;
    review: string;
    feedbackLink: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Guty Santana',
        avatar: 'https://avatars3.githubusercontent.com/u/1734773?v=4',
        review: 'Justin explains things in an easy way, he takes the time to point you in the right direction, no matter how new to Elixir you are.',
        feedbackLink:
            'https://exercism.org/profiles/justin-m-morgan/testimonials?uuid=889717ae-7d2a-41cd-9e10-36c5270f01f8',
    },
    {
        name: 'Sam Frances',
        avatar: 'https://avatars0.githubusercontent.com/u/2003369?v=4',
        position: 'Senior Software Engineer (Cydar Medical)',
        linkedIn: 'https://www.linkedin.com/in/samfrances/',
        review: 'Very knowledgeable, detailed and conscientious. I learned a lot.',
        feedbackLink:
            'https://exercism.org/profiles/justin-m-morgan/testimonials?uuid=5d436fef-d04b-4122-8dbc-6ef4663d94d4',
    },
    {
        name: 'Michael S. Daines',
        avatar: 'https://avatars3.githubusercontent.com/u/953037',
        position: 'Senior Software Engineer (ProducePay)',
        linkedIn: 'https://www.linkedin.com/in/michael-daines-1771272/',
        review: 'His response was prompt, and the help was insightful.',
        feedbackLink:
            'https://exercism.org/profiles/justin-m-morgan/testimonials?uuid=16236079-58be-4559-9bb6-7370d38e8d5c',
    },
    {
        name: 'elvisds',
        avatar: 'https://dg8krxphbh767.cloudfront.net/placeholders/user-avatar.svg',
        review: 'Justin is a great mentor - patient and thoughtful. The references he shared for further reading were just wonderful. Thank you!',
        feedbackLink:
            'https://exercism.org/profiles/justin-m-morgan/testimonials?uuid=003d59c8-688d-4bcf-9b8d-7397caee4e5f',
    },
];

const Testimonial = ({ avatar, feedbackLink, linkedIn, name, position, review }: Testimonial) => (
    <a key={name} href={feedbackLink} className="cursor-pointer">
        <Card>
            <div className="flex items-center space-x-6 mb-4">
                <Image
                    className="h-28 w-28 object-cover object-center rounded-full"
                    src={avatar}
                    width="120px"
                    height="120px"
                    alt={`${name} Profile Picture`}
                />
                <div className="">
                    <p className="text-xl text-gray-700 font-normal mb-1">{name}</p>
                    {position ? (
                        <a href={linkedIn} className="text-base  text-blue-600 font-normal">
                            {position}
                        </a>
                    ) : (
                        <p className="text-gray-400">No position listed</p>
                    )}

                    <p className="text-gray-700 leading-normal font-normal text-base">{review}</p>
                </div>
            </div>
        </Card>
    </a>
);

const Mentoring = () => (
    <div className="grid grid-cols-2 gap-8">
        <div>
            <div className="flex flex-col items-center text-xl text-center space-y-4 px-8">
                <p>
                    Exercism is a code teaching platform for over 50 programming languages. It teaches languages by way
                    of a currated curriculum of coding challenges.
                </p>
                <p>
                    Several times a week, I mentor students (primarily in the Elixir language). I have provided a sample
                    of some of the more glowing feedback provided by my mentees.
                </p>
            </div>
        </div>
        {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.feedbackLink} {...testimonial} />
        ))}

        <div className="px-8 text-xl text-center flex flex-col justify-center place-items-center">
            <p className="pb-4">
                The full collection of testimonials and further details on my activity (including challenge maintenance
                and contributed documentation) on the platform can be found on my public profile.
            </p>

            <ButtonLink to="https://exercism.org/profiles/justin-m-morgan">
                <Exercism className="fill-current h-8" />
            </ButtonLink>
        </div>
    </div>
);

export default Mentoring;
