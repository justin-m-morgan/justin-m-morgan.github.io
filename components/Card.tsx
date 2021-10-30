const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={`bg-gray-100 text-gray-900 rounded-lg p-6 ${className}`}>{children}</div>
);

export default Card;
