import Link from "next/link";

type Props = {
    title: string;
    items: {
        text: string;
        href: string;
    }[],
};

const BottomMenuList = ({title, items}: Props) => {
    return (
        <div>
            <h3 className="text-2xl font-bold pb-7">{title}</h3>
            <ul className="text-lg font-bold flex flex-col justify-center items-start gap-3.5">
                {items.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BottomMenuList;