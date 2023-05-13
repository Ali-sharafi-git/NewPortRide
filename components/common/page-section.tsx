import {ReactNode} from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

const PageSection = ({children, className}: Props) => {
    return (
        <section
            className={`container mx-auto max-w-6xl px-5 flex flex-col justify-center items-center ${className}`}>{children}</section>
    );
};

export default PageSection;