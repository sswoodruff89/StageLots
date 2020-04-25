import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {openModal} from '../../actions/modal_actions';
import {logout} from "../../actions/session_actions";



const NavBar = (props) => {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();

    const rightNav = () => {
      
      if (!user) {
        return (
          <div className="buttons">
            <button
              className="login"
              data-testid="login-button"
              onClick={() => {
                dispatch(openModal({ type: "session", formType: "login" }));
              }}
            >
              Log In
            </button>

            <button
              className="Signup"
              data-testid="signup-button"
              onClick={() => {
                dispatch(openModal({ type: "session", formType: "signup" }));
              }}
            >
              Sign Up
            </button>
          </div>
        );
      } else {
        return (
          <div className="buttons">
            <button
              className="logout"
              data-testid = "logout-button"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Log Out
            </button>
          </div>

        )
      }
    }
    return (
      <header className="navbar">
        <h2>StageLots</h2>

        {rightNav()}
      </header>
    );
}

export default NavBar;