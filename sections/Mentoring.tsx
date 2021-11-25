import { ButtonLink, OutlineButtonStyles } from '../components/Button';
import Card from '../components/Card';
import { Exercism } from '../components/svg';
import Image from 'next/image';
import { testimonials, Testimonial } from '../data/mentoring';

const Testimonial = ({ avatar, feedbackLink, linkedIn, name, position, review }: Testimonial) => (
    <Card>
        <div className="grid lg:gap-2 items-start mb-4">
            <div className="flex items-center">
                <Image
                    className="object-cover object-center rounded-full"
                    src={avatar}
                    width="100px"
                    height="100px"
                    alt={`${name} Profile Picture`}
                />

                <div className="ml-6">
                    <p className="text-xl text-gray-700 font-normal mb-1">{name}</p>
                    {position ? (
                        <a href={linkedIn} className="text-base  text-blue-600 font-normal">
                            {position}
                        </a>
                    ) : (
                        <p className="text-gray-400">No position listed</p>
                    )}
                </div>
            </div>

            <a key={name} href={feedbackLink} className="cursor-pointer text-gray-900 py-2">
                <p className="text-gray-700 lg:text-lg pt-2 leading-normal font-normal pb-3">{review}</p>
            </a>
        </div>
    </Card>
);

const Mentoring = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col justify-center items-center space-y-4 ">
            <p>
                Exercism is a code teaching platform for over 50 programming languages. It teaches languages by way of a
                currated curriculum of coding challenges.
            </p>
            <p>
                Several times a week, I mentor students (primarily in the Elixir language). I have provided a sample of
                some of the more glowing feedback provided by my mentees.
            </p>
        </div>

        {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.feedbackLink} {...testimonial} />
        ))}

        <div className="px-8 text-center flex flex-col justify-center place-items-center">
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
