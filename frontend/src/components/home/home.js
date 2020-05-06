import React from 'react';
import Search from "../search/search";

const HomePage = () => {
    return (
      <main>
        <section className="home-search-container">
            <Search />
        </section>
        <div className="home-page">
          <h1>Welcome to Stage Lots</h1>
        </div>

        <footer>{Date(Date.now()).toString()}</footer>
      </main>
    );
};

export default HomePage;