interface SectionProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
    heading?: string;
}
const Section = ({ className, children, heading, id }: SectionProps) => (
    <section id={id} className="text-white px-4 md:px-18 lg:px-48 pt-24">
        {heading && (
            <h2 className={`text-2xl lg:text-4xl text-gray-700 font-bold uppercase tracking-widest pb-16 ${className}`}>
                {headingDecorator(heading)}
            </h2>
        )}
        {children}
        <hr className="mt-16 mb-16 pb-16" />
    </section>
);

const headingDecorator = (heading: string) => `|> ${heading}`;

export default Section;
