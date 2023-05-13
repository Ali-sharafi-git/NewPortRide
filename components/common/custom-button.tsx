import {ButtonHTMLAttributes} from "react";

type ButtonTypes = 'primary' | 'outline';

type ButtonSizes = 'small' | 'medium' | 'large';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonType: ButtonTypes,
    buttonSize: ButtonSizes;
};

const renderTypeClasses = (type: ButtonTypes) => {
    switch (type) {
        case 'primary':
            return 'bg-white text-black hover:bg-transparent hover:text-white';
        case 'outline':
            return 'bg-transparent text-white hover:bg-white hover:text-black';
        default:
            return '';
    }
};

const renderSizeClasses = (size: ButtonSizes) => {
    switch (size) {
        case 'small':
            return 'text-base px-2.5 py-0.5 md:px-5 md:py-1';
        case 'medium':
            return 'text-lg px-5 py-1.5 md:px-10 md:py-3';
        case 'large':
            return 'text-lg px-8 py-2.5 md:px-16 md:py-5';
        default:
            return '';
    }
};

const CustomButton = ({children, className, onClick, buttonType, buttonSize, ...props}: Props) => {
    return (
        <button
            className={`flex items-center gap-2 font-bold rounded-full border-4 border-white transition ${renderTypeClasses(buttonType)} ${renderSizeClasses(buttonSize)} ${className || ''}`}
            onClick={onClick} {...props}>{children}</button>
    );
};

export default CustomButton;