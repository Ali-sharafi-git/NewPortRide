type Props = {
    title: string;
    paragraphs: string[];
};

const SimpleArticleItem = ({title, paragraphs}: Props) => {
    return (
        <article className="flex flex-col justify-start items-start gap-3 text-left">
            <h4 className="text-xl font-bold">{title}</h4>
            {paragraphs.map((item, index) => (
                <p key={index} className="text-base">{item}</p>
            ))}
        </article>
    );
};

export default SimpleArticleItem;