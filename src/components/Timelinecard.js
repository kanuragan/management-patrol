import React from 'react';

const Timelinecard = (props) => {
    return (
        <>
            <div className="time-label">
                <span className={props.bgDate}>
                    {props.valDate}
                </span>
            </div>

            <div>
                <i className={props.icon}></i>

                <div className="timeline-item">
                    <span className="time"><i className="far fa-clock"></i> {props.valTime}</span>

                    <div className="timeline-body">
                        {props.valBody}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timelinecard;