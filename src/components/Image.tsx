interface ImageProps {
    route: string;
    width: string;
    height: string;
    alternativeDesc: string;
}

const Image: React.FC<ImageProps> = ({route, width, height, alternativeDesc}) => {
    return(
        <img className={`object-contain w-${width} h-${height}`} src={route} alt={alternativeDesc} />
    )
}

export default Image