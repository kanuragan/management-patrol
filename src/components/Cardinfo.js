import React from 'react';
import { NavLink } from 'react-router-dom';

const Cardinfo = (props) => {
    return (
        <div className="col-lg-3 col-6">
            <div className={props.cardStyle}>
                <div className="inner">
                    <h4>{props.nilai}</h4>

                    <p>{props.text}</p>
                </div>
                <div className="icon">
                    <i className={props.iconStyle}></i>
                </div>
                <NavLink to={props.linkUri} className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></NavLink>
            </div>
        </div>
        );
    };

export default Cardinfo;