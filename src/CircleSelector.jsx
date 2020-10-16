import React from 'react';
import './CircleSelector.css'

function CircleSelector(props) {
    return (
        <div className="CircleSelector">
            {props.circleArr.map((el, idx) => (
                <button
                    key={idx + 10}
                    className={ el ? 'CircleSelector.button selected' : 'CircleSelector.button' }
                    onClick={() => props.handleButtonClick(idx)}
                >
                    Circle {idx + 1} Selected
                </button>
            ))}
        </div>
    )
}

export default CircleSelector;