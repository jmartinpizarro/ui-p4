interface ParagraphProps {
    text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({text}) => {
    return(
        <p className="text-darkgrey text-sm md:text-md lg:text-lg break-words normal-case">{text}</p>
    )
}

export default Paragraph