export interface Testimonial {
    avatar: string;
    name: string;
    position?: string;
    linkedIn?: string;
    review: string;
    feedbackLink: string;
}

export const testimonials: Testimonial[] = [
    {
        name: 'Carlo Mandelli',
        avatar: 'https://avatars3.githubusercontent.com/u/5462153?v=4',
        review: "Thank you very much for all the time you spent teaching me new concepts. Best mentoring session I've ever got! Really hope to meet you again on next exercises.",
        feedbackLink:
            'https://exercism.org/profiles/justin-m-morgan/testimonials?uuid=ed2e2845-ea53-4991-b65b-6a81061e6c0f',
    },
    {
        name: 'Guty Santana',
        avatar: 'https://exercism.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcnh0IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a3c73b965d13b8e4a762e03b1e82c4d6f3cd2745/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RG5Sb2RXMWlibUZwYkVraURUSXdNSGd5TURCZUJqc0dWRG9MWlhoMFpXNTBTU0lNTWpBd2VESXdNQVk3QmxRNkRHZHlZWFpwZEhrNkMyTmxiblJsY2c9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--b3b0168d54801c89c14d4b46b31b851e450874c6/avatar.jpg',
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
        name: 'Kah Goh',
        avatar: 'https://avatars.githubusercontent.com/u/773175',
        position: 'Software Engineer (Thales)',
        linkedIn: 'https://www.linkedin.com/in/kah-goh-911ab39/',
        review: 'Thanks for teaching me another way!',
        feedbackLink:
            'https://exercism.org/profiles/justin-m-morgan/testimonials?uuid=cc42af7d-ad13-4ad3-bd23-b20f291959af',
    },
    {
        name: 'elvisds',
        avatar: 'https://dg8krxphbh767.cloudfront.net/placeholders/user-avatar.svg',
        review: 'Justin is a great mentor - patient and thoughtful. The references he shared for further reading were just wonderful. Thank you!',
        feedbackLink:
            'https://exercism.org/profiles/justin-m-morgan/testimonials?uuid=003d59c8-688d-4bcf-9b8d-7397caee4e5f',
    },
    {
        name: 'Dmitry Galkin',
        avatar: 'https://avatars1.githubusercontent.com/u/3389804',
        review: "Learned more from the discussion than from the exercise itself. That's what I call mentoring!",
        feedbackLink:
            'https://exercism.org/profiles/justin-m-morgan/testimonials?uuid=a93ca37a-d561-46e6-811e-3a63db7e0009',
    },
];
