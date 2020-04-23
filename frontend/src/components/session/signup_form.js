import React, {useState, useRef} from 'react';

const SignupForm = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();
    const password2Ref = useRef();

    return (
      <form>
        <h2 className="session-form-header">Sign Up</h2>

        <div className="signup-form">
          <label>
            Email
            <input
              className="email"
              type="text"
              ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              data-testid="email-input"
            />
          </label>

          <label>
            Password
            <input
              className="password"
              type="password"
              ref={passwordRef}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              data-testid="password-input"
            />
          </label>

          <label>
            Confirm Password
            <input
              className="password2"
              type="password"
              ref={password2Ref}
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Confirm Password"
              data-testid="password2-input"
            />
          </label>

          <input type="button" value="Sign Up" />
        </div>
      </form>
    );
}

export default SignupForm;