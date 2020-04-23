import React from 'react';
import SignupForm from "../session/signup_form";

const HomePage = () => {
    return (
        <main>
            <h1>Stage Seeker</h1>
            <SignupForm />

            <footer>
                {Date(Date.now()).toString()}
            </footer>
        </main>
    )
};

export default HomePage;