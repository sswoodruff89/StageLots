import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {closeModal} from "../../actions/modal_actions";
import {signup, login, deleteErrors} from '../../actions/session_actions';

const SessionForm = (props) => {
  const dispatch = useDispatch();
  const [formType, setFormType] = useState(props.formType);

  const errors = useSelector(state => state.errors.session);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  let header;
  let confirmPassword;
  let redirect;

  const handleSubmit = e => {
      e.preventDefault();
      if (formType == 'signup') {
          dispatch(signup({email, password, password2}));
      } else {
          dispatch(login({email, password}));
      }
  }


  if (formType === 'signup') {

    header = "Sign Up";

    confirmPassword = (
      <>
        {/* <div>Confirm Password</div> */}
        <input
          className="password2"
          type="password"
          ref={password2Ref}
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="Confirm Password"
          data-testid="password2-input"
        />
        <div className="error-caption" data-testid="password2-error">
          {errors.password2}
        </div>
      </>
    );
    
    redirect = (
      <div className="redirect">
        <p>Have an account?</p>
        <p
          onClick={() => {
            setFormType("login");
            dispatch(deleteErrors());
          }}
        >
          {" "}
          Log in!
        </p>
      </div>
    );

  } else {
    header = "Log In";
    confirmPassword = null;
    
    redirect = (
      <div className="redirect">
        <p>Don't have an account?</p>
        <p
          onClick={() => {
            setFormType("signup");
            dispatch(deleteErrors());
          }}
        >
          {" "}
          Sign in!
        </p>
      </div>
    );
  }


//////////////////Render Return//////////////////////

  return (
    <form className="session-form" onSubmit={handleSubmit}>

      <div className="close-modal" onClick={() => dispatch(closeModal())} >
        <i className="fas fa-times"></i>
      </div>{" "}
      <h2 className="session-form-header">{header}</h2>
      <div className={`${formType}-form`}>
        {/* <div>Email</div> */}
        <input
          className="email"
          type="text"
          ref={emailRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          data-testid="email-input"
        />
        <div className="error-caption" data-testid="email-error">
          {errors.email}
        </div>

        {/* <div>Password</div> */}
        <input
          className="password"
          type="password"
          ref={passwordRef}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          data-testid="password-input"
        />
        <div className="error-caption" data-testid="password-error">
          {errors.password}
        </div>

        {confirmPassword}
      </div>
      <button className="form-submit" type="submit">
        {header}
      </button>
      {redirect}
    </form>
  );
}

export default SessionForm;