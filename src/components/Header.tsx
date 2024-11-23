interface HeaderProps {
    text: string;
    color: string;
}

const Header: React.FC<HeaderProps> = ({text, color}) => {
    return(
    <h1 className={`text-${color} text-3xl md:text-5xl lg:text-6xl font-bold uppercase break-words`}>{text}</h1>
    )
}

export default Header