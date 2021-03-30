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
    area, type='Circles', color='#555555', height='400', width='400',
}) => {
    const { promiseInProgress } = usePromiseTracker({area})

    const load = useSelector(selectShowHeader)

    return promiseInProgress ? (
        <div className="spinner">
            <Loading
                type={type} 
                color={color} 
                height={height} 
                width={width}  
            />
        </div>
    ) : null 
}

export default Loader