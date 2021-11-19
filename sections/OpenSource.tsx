import Card from '../components/Card';

interface Ticket {
    description: string;
    ghStatus: 'In Progress' | 'Merged';
    issueUrl: string;
}

interface Contribution {
    organization: string;
    organizationBlurb: string;
    tickets: Ticket[];
}

const contributions: Contribution[] = [
    {
        organization: 'Surface UI',
        organizationBlurb:
            'A component building library for Phoenix Liveview (Elixir) inspired by the component interface of React. Provides automatic component documentation, comprehensive intellisense, integrations with popular UI frameworks, and other plugins.',
        tickets: [
            {
                description: 'Integration Guide',
                ghStatus: 'Merged',
                issueUrl: 'https://github.com/surface-ui/surface_site/pull/53',
            },
            // { description: 'Bootstrap Script Guide', ghStatus: 'In Progress', issueUrl: '' },
        ],
    },
    {
        organization: 'Exercism',
        organizationBlurb:
            'A code learning platform based on challenge based directed learning. Exercism offers learning paths for over 50 languages and encourages its users to both seek and provide mentorship from other members of the platform.',
        tickets: [
            {
                description: 'Mentorship Guide (Revisions)',
                ghStatus: 'Merged',
                issueUrl: 'https://github.com/exercism/docs/pull/273',
            },
            {
                description: 'Authored Challenge Test',
                ghStatus: 'Merged',
                issueUrl: 'https://github.com/exercism/elixir/pull/976',
            },
        ],
    },
];

const OpenSource = () => (
    <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributions.map((contribution) => (
                <Card
                    key={contribution.organization}
                    className="py-8 rounded-lg space-y-8 flex flex-col justify-between"
                >
                    <div>
                        <h3 className="text-2xl font-bold pb-2">{contribution.organization}</h3>
                        <p className="text-sm text-gray-700">{contribution.organizationBlurb}</p>
                    </div>
                    <ul className="space-y-2">
                        {contribution.tickets.map(({ description, ghStatus, issueUrl }) => (
                            <li key={description} className="lg:flex justify-between">
                                &rarr; {description}
                                <a href={issueUrl} target="_blank" rel="noreferrer" className="block">
                                    <i className="fab fa-github"></i> Issue
                                </a>
                            </li>
                        ))}
                    </ul>
                </Card>
            ))}
        </div>
    </div>
);
export default OpenSource;
