import {FaInstagram, FaLinkedinIn} from "react-icons/fa";
import Link from "next/link";

type Props = {
    image: string;
    name: string;
    instagram: string;
    linkedin: string;
};

const UserCard = ({image, name, instagram, linkedin}: Props) => {
    return (
        <article className="flex flex-col justify-center items-center text-center">
            <img src={image} alt={name} className="w-full"/>
            <h5 className="text-xl md:text-2xl lg:text-3xl font-bold mt-3 md:mt-8">{name}</h5>
            <ul className="flex items-center gap-4 mt-3">
                <li>
                    <Link href={instagram} target="_blank">
                        <FaInstagram size={30}/>
                    </Link>
                </li>
                <li>
                    <Link href={linkedin} target="_blank">
                        <FaLinkedinIn size={30}/>
                    </Link>
                </li>
            </ul>
        </article>
    );
};

export default UserCard;