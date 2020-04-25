import React from 'react';

const HomePage = () => {
    return (
        <main>
            <div className="home-page">
                <h1>Welcome to Stage Lots</h1>
            </div>

            <footer>
                {Date(Date.now()).toString()}
            </footer>
        </main>
    )
};

export default HomePage;