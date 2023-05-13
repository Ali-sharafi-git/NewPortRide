import Link from "next/link";

type PropsSizes = 'small' | 'medium' | 'large';

type Props = {
    image: string;
    title: string;
    description?: string;
    linkText: string;
    linkUrl: string;
    theme: 'light' | 'dark';
    size: PropsSizes;
};

const renderSizeClasses = (size: PropsSizes, type: 'title' | 'link') => {
    if (type === 'title') {
        switch (size) {
            case 'small':
                return 'text-lg';
            case 'medium':
                return 'text-xl';
            case 'large':
                return 'text-2xl';
            default:
                return '';
        }
    } else {
        switch (size) {
            case 'small':
                return 'text-sm';
            case 'medium':
                return 'text-base mb-5';
            case 'large':
                return 'text-xl mt-3 mb-8';
            default:
                return '';
        }
    }
};

const PictureCard = ({image, title, description, linkText, linkUrl, theme, size}: Props) => {
    return (
        <article
            className={`border-2 flex flex-col justify-between text-center ${theme === 'light' ? 'bg-white text-black border-white' : 'border-c-dark-gray bg-c-dark'}`}>
            <img src={image} alt={title}
                 className={`w-full mb-4 border-b-2 ${theme === 'light' ? 'border-white' : 'border-c-dark-gray'}`}/>
            <div className="px-4 flex-1 flex flex-col justify-between">
                <div>
                    <h5 className={`font-bold ${description ? 'mb-2' : ''} ${renderSizeClasses(size, 'title')}`}>{title}</h5>
                    {description && <p className="mb-6">{description}</p>}
                </div>
                <Link href={linkUrl}
                      className={`block font-bold underline ${renderSizeClasses(size, 'link')}`}>{linkText}</Link>
            </div>
        </article>
    );
};

export default PictureCard;