import React from 'react';
import { useHistory } from "react-router-dom";


export const Login = () => {

  let history = useHistory();

  function handleBackClick() {
    history.push("/");
  }
  function handleChatClick() {
    history.push('/video-chat');
  }

  return (
    <div>
      <div className="login-screen">
        <div className="_options">
          <div className="_inner">
            <h3>Summary</h3>
            <ul>
              <li>
                <label htmlFor="a-option">All things</label>
                <input type="radio" id="a-option" name="selector" />
                <div className="check" />
              </li>
              <li>
                <label htmlFor="b-option">Business</label>
                <input type="radio" id="b-option" name="selector" />
                <div className="check">
                  <div className="inside" />
                </div>
              </li>
              <li>
                <label htmlFor="c-option">Personal</label>
                <input type="radio" id="c-option" name="selector" />
                <div className="check">
                  <div className="inside" />
                </div>
              </li>
              <li>
                <label htmlFor="d-option">Family</label>
                <input type="radio" id="d-option" name="selector" />
                <div className="check">
                  <div className="inside" />
                </div>
              </li>
              <li>
                <label htmlFor="e-option">At work</label>
                <input type="radio" id="e-option" name="selector" />
                <div className="check">
                  <div className="inside" />
                </div>
              </li>
            </ul>
            <button onClick={handleBackClick}>Back</button>
          </div>
        </div>
        <div className="_loginform">
          <div className="_inner">
            <div>
              <input type="text" placeholder="Room name" />
            </div>
            <div>
              <input type="text" placeholder="Your name" />
            </div>
            <div>
              <select>
                <option>One-to-One</option>
                <option>One-to-many</option>
              </select>
            </div>
            <div>
              <label>teacher</label>
              <input type="radio" name="a" />
              <label>student</label>
              <input type="radio" name="a" />
            </div>
            <button onClick={handleChatClick}>Join Call</button>
          </div>
        </div>
      </div>
    </div>
  );
};
