import React, { useRef } from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loading from "react-loader-spinner";
import { useSelector } from "react-redux";
import { selectShowHeader } from "../store/reducers/movies";

type Props = {
    area?: string
    type?: "Audio"
        |"BallTriangle"
        |"Bars"
        |"Circles"
        |"Grid"
        |"Hearts"
        |"Oval"
        |"Puff"
        |"Rings"
        |"TailSpin"
        |"ThreeDots"
        |"Watch"
        |"RevolvingDot"
        |"Triangle"
        |"Plane"
        |"MutatingDots"
        |"CradleLoader"
    color?: string
    height?: string
    width?: string
}

const Loader:React.FC<Props> = ({
    area, type, color, height, width,
}) => {
    const { promiseInProgress } = usePromiseTracker({area})

    const load = useSelector(selectShowHeader)

    const spinner = !promiseInProgress ? null : (
        <div className="spinner">
            <Loading
                type={type || 'Circles'} 
                color={color || '#555555'} 
                height={height || '400'} 
                width={width || '400'}  
            />
        </div>
    )
    return spinner 
}

export default Loader