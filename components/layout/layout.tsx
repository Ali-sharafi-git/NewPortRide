import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {ReactNode} from "react";
import HeaderInfo from "@/components/common/header-info";

type Props = {
    title: string;
    children: ReactNode;
};

const Layout = ({title, children}: Props) => {
    return (
        <>
            <HeaderInfo title={title}/>
            <div className="bg-black text-white">
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    );
};

export default Layout;