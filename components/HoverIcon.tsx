import { SymbolIcon } from './IconSymbols';

interface HoverIconProps {
    icon: string;
    label: string;
}
const HoverIcon = ({ icon, label }: HoverIconProps) => (
    <div className="flex flex-col items-center group transform hover:scale-150 transition-transform duration-150">
        <SymbolIcon key={icon} icon={icon} className="w-8 h-8" />
        <span className="text-xs opacity-0 group-hover:opacity-100">{label}</span>
    </div>
);

export default HoverIcon;
