import BottomMenu from "@/components/footer/bottom-menu";
import CopyrightSection from "@/components/footer/copyright-section";

const Footer = () => {
    return (
        <footer className="bg-c-primary">
            <BottomMenu/>
            <CopyrightSection/>
        </footer>
    );
};

export default Footer;