import React, {useState} from 'react';


const ProfilePage = (props) => {

    const [tab, setTab] = useState('Favorites')

    return (
      <section className="profile-page">
        <div className="left-nav">
          <div className="user-details">
            <div>Name</div>
            <div>Contact</div>
          </div>
          <div className="profile-tabs-container">
            <ul className="profile-tabs">
              <li
                className={`profile-tab ${
                  tab === "Favorites" ? "current" : ""
                }`}
                key="1"
              >
                Favorites
              </li>
              <li
                className={`profile-tab ${
                  tab === "Reviews" ? "current" : ""
                }`}
                key="1"
              >
                Reviews
              </li>
              <li
                className={`profile-tab ${
                  tab === "History" ? "current" : ""
                }`}
                key="1"
              >
                History
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
}

export default ProfilePage;