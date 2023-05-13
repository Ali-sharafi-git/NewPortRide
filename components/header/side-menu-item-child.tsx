import {useRouter} from "next/router";
import Link from "next/link";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import {Dispatch, SetStateAction} from "react";

type Props = {
    text: string;
    href?: string;
    hasChild: boolean;
    isModal: boolean;
    isOpened?: boolean;
    setIsOpened?: Dispatch<SetStateAction<boolean>>;
};

const SideMenuItemChild = ({text, href, hasChild, isModal, isOpened, setIsOpened}: Props) => {
    const router = useRouter();

    return (
        <>
            {hasChild ? <span
                    className={`block ${isModal ? 'p-5' : 'p-2.5 peer'} transition hover:opacity-90 hover:underline cursor-pointer flex flex-row-reverse justify-center items-center gap-3`} onClick={() => isModal ? setIsOpened!(!isOpened) : null}>{text} {isModal &&
                    (isOpened ? <FaChevronUp color="#000"/> : <FaChevronDown color="#000"/>)}</span> :
                <Link href={href || '#'}
                      className={`block ${isModal ? 'p-5' : 'p-2.5'} transition hover:opacity-90 hover:underline ${router.pathname === href ? 'underline' : ''}`}>{text}</Link>}
        </>
    );
};

export default SideMenuItemChild;