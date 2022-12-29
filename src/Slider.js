import { Fragment, useState, useRef } from "react"

const Slider = ({min, max, onChange}) => {
    const [ minValue, setMinValue ] = useState(min);
    const [ maxValue, setMaxValue ] = useState(max);

    const minValueRef = useRef(null);
    const maxValueRef = useRef(null);

    return(
        <Fragment>
            <input type="range" min="1" max="1000" className="left thumb"></input>
            <input type="range" min="1" max="1000" className="right thumb"></input>
            <div className="slider">
                <div className="slider-track"></div>
                <div className="slider-range"></div>
            </div>
        </Fragment>
    )
}

export default Slider;