import {FaTimes} from "react-icons/fa";
import SideMenuList from "@/components/header/side-menu-list";
import Modal from "react-modal";
import {Dispatch, SetStateAction} from "react";

type Props = {
    openedMenu: boolean;
    setOpenedMenu: Dispatch<SetStateAction<boolean>>;
};

const MenuMobileModal = ({openedMenu, setOpenedMenu}: Props) => {
    return (
        <Modal isOpen={openedMenu} style={{
            overlay: {
                width: '100%',
                backgroundColor: '#fff',
                zIndex: 999,
                overflowX: 'hidden',
                overflowY: 'auto',
            },
            content: {
                border: 'none',
                position: 'relative',
            },
        }} closeTimeoutMS={500}>
            <button className="absolute right-16 top-0 border-2 border-black p-5 shadow"
                    onClick={() => setOpenedMenu(false)}>
                <FaTimes size={32}/>
            </button>
            <SideMenuList isModal={true}/>
        </Modal>
    );
};

export default MenuMobileModal;