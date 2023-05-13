type PropsSizes = 'small' | 'medium' | 'large';

type Props = {
    title?: string;
    subtitle?: string;
    firstTitle: boolean;
    size: PropsSizes;
    className?: string;
};

const renderSizeClasses = (size: PropsSizes) => {
    switch (size) {
        case 'small':
            return 'text-xl md:text-2xl lg:text-3xl';
        case 'medium':
            return 'text-xl md:text-2xl lg:text-4xl';
        case 'large':
            return 'text-xl md:text-3xl lg:text-5xl';
        default:
            return '';
    }
};

const SectionTitle = ({title, subtitle, firstTitle, size, className}: Props) => {
    return (
        <div className={`text-center flex flex-col gap-3 ${className || 'mb-14'}`}>
            {title &&
                <h2 className={`font-bold ${renderSizeClasses(size)} ${firstTitle ? 'order-1' : 'order-2'}`}>{title}</h2>}
            {subtitle && <h3 className={`text-base lg:text-xl font-bold ${firstTitle ? 'order-2' : 'order-1'}`}>{subtitle}</h3>}
        </div>
    );
};

export default SectionTitle;