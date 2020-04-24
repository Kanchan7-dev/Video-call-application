import React from 'react';
export const Left = () => {
    return (<div className="_info">
        <div className="_inner">
            <div className="_coloredbox"></div>
            <div>
                <h3>Let's Go!</h3>
                <ul className="_daystatus">
                    <li>
                        <i className="lni lni-alarm-clock"></i>Today
            <i className="fa arrow-bottom"></i>
                    </li>
                </ul>
            </div>
            <span>
                <i className="lni lni-calendar"></i>
            </span>
            <p>No Tasks for Today</p>
        </div>
    </div>)
}
export default Left;
