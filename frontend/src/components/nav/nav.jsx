import React from 'react';
import {useDispatch} from 'react-redux';
import {openModal} from '../../actions/modal_actions';



const NavBar = (props) => {
    const dispatch = useDispatch();

    return (
      <header className="navbar">
        <h2>StageLots</h2>

        <div className="buttons">
          <button
            className="login"
            onClick={() => {
              dispatch(openModal({ type: "session", formType: "login" }));
            }}
          >
            Log In
          </button>

          <button
            className="Signup"
            onClick={() => {
              dispatch(openModal({ type: "session", formType: "signup" }));
            }}
          >
            Sign Up
          </button>
        </div>
      </header>
    );
}

export default NavBar;