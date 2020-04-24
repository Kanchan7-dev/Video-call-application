import React from 'react';

export const Chat = ()=>{
    return (<div><section>
        <div className="_user">
          <div style={{background: '#252529'}}>bcckknhdl</div>
        </div>
        <div className="_user">
          <div style={{background: '#252529'}}>fsd</div>
          <div style={{background: '#252529'}}>dsd</div>
        </div>
        <div className="_bottom-options">
          <div>
            <div className="_meeting-details">
              <span style={{background: '#D6D6D6'}}>Meeting Details</span>
            </div>
            <div className="_call-options">
              <ul>
                <li><span><i className="lni lni-mic">f</i></span></li>
                <li><span><i className="lni lni-phone">f</i></span></li>
                <li><span><i className="lni lni-video">f</i></span></li>
              </ul>
            </div>
            <div className="_call-controls">
              <span className="_status">Turn on Captions</span>
              <span className="_availibility">Present Screen</span>
              <span className="_moreoptions">...</span>
            </div>
          </div>
        </div>
        <div className="_right-options">
          <div className="chatbar">
            <ul>
              <li><span>icon</span>name1</li>
              <li><span>icon</span>name1</li>
              <li><span>icon</span>name1</li>
              <li><span>icon</span>name1</li>
            </ul>
          </div>
        </div>
      </section></div>)
}