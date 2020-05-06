import React from 'react';

const Search = props => {


    return (
      <section className="search-container">
        <form type="submit" className="search-form">
          <div className="input-location">
            <span>Location</span>
            <input type="text" placeholder="Where are you shooting?" />
          </div>

          <div className="input-dates">
            <span>Dates</span>
            <div className="dates-container">
                <div>
                <span>Start</span>

                <input type="date" placeholder="When are you shooting?" />
                </div>
                <div>
                <span>End</span>
                <input type="date" placeholder="When are you shooting?" />
                </div>
            </div>
                
            </div>
        </form>
      </section>
    );
}

export default Search;