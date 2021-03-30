import React, { useEffect, useState } from "react";
import { getImage } from "../../assets/js/utils";

type Props = {
    poster: string
    alt?: string
    width?: string
    height?:  string
}

const ImgProcessed: React.FC<Props> = ({ poster, width, height, alt }) => {
    const [img, setImg] = useState('')
    const PLACEHOLDER_IMG = 'https://via.placeholder.com/260x300/000000?text=Image+has+not+found'
    
    useEffect(() => {
        getImage(poster)
            .then((url) => setImg(url))
            .catch(() => setImg(PLACEHOLDER_IMG))
    })
    return (
        <img src={img} height={height} width={width} alt={alt} />
    );
}

export default ImgProcessed;