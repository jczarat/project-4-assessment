import React from 'react'
import './Circles.css'

function Circles(props) {
    return (
        <div className="Circles">
            {props.circleArr.map((el, idx) => (
                <div
                    key={idx}
                    className={el ? "Circles.div selected" : "Circles.div"}
                >{idx + 1}</div>
            ))}
        </div>
    )
}

export default Circles