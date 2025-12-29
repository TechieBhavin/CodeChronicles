import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profile-container">

      {/* PROFILE HEADER */}
      <div className="profile-card">
        <img
          src="/media/mission.png"
          alt="profile"
          className="profile-avatar"
        />

        <div className="profile-info">
          <h2>Techie Bhavin</h2>
          <p className="username">@techie.bhavin</p>
          <p className="bio">
            Full Stack Developer | Java | React | Node.js
          </p>
          <button className="primary">✍️ Edit your profile</button>

          {/* <span className="role-badge">Reader</span> */}
        </div>
      </div>

      {/* STATS */}
      <div className="stats-bar">
        <div><h3>12</h3><p>Blogs</p></div>
        <div><h3>3.2k</h3><p>Views</p></div>
        <div><h3>240</h3><p>Likes</p></div>
        <div><h3>18</h3><p>Bookmarks</p></div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="action-buttons">
        <button className="primary">✍️ Request to Publish</button>
        <button className="secondary">🚀 Become a Publisher</button>
        <button className="outline">📊 Dashboard</button>
      </div>

      {/* TABS */}
      <div className="profile-tabs">
        <button className="active">My Blogs</button>
        <button>Bookmarks</button>
        <button>Reading List</button>
        <button>Settings</button>
      </div>

      {/* TAB CONTENT */}
      <div className="tab-content">
        <p>No blogs published yet.</p>
      </div>

    </div>
  );
};

export default ProfilePage;
