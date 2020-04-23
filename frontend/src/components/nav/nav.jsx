import React from 'react';


const NavBar = (props) => {

    return (
        <header className="navbar">
            <h2>StageLots</h2>

            <div className="buttons">
                <button className="login">
                    Log In
                </button>

                <button className="Signup">
                    Sign Up
                </button>
            </div>
        </header>
    );
}

export default NavBar;