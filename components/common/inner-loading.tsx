import {FadeLoader} from "react-spinners";

const InnerLoading = () => {
    return (
        <div className="flex-1 flex justify-center items-center py-40">
            <FadeLoader color="#fff"/>
        </div>
    );
};

export default InnerLoading;