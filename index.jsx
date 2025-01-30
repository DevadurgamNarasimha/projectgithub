import React from 'react';
const SocialProfile = () => {
  return (
    <div className="social-profile-container">
      <div className="social-profile-header">
        <div className="social-profile-img-container">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7P2dIJP4xmPhm6JUPSd46x7hCvZ-e2g37ng&s"
              alt="Profile"
              className="social-profile-img"
            />
          </div>
          <div className="social-profile-status" />
        </div>
        <div className="social-profile-name-username">
          <h2 className="social-profile-name">Lindsey James</h2>
          <p className="social-profile-username">@lindsey_jam3s</p>
        </div>

        <div className="social-profile-bio">
          <p>Actress, musician, songwriter</p>
          <p>and artist. PM for work inquiries</p>
          <p>or</p>
          <p className="hashtag">#tag</p>
          <p>me in your posts</p>
        </div>
        <div className="social-profile-tags">
          <span className="social-profile-tag">#ART</span>
          <span className="social-profile-tag">#PHOTOGRAPHY</span>
          <span className="social-profile-tag">#MUSIC</span>
        </div>

        <div className="social-profile-buttons">
          <button className="social-profile-button social-profile-button-message">
            Message
          </button>
          <button className="social-profile-button social-profile-button-follow">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialProfile;
