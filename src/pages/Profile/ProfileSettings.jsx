import React from "react";
import "./profileSettings.css";
import profileImage from "../../assets/profileImage.png";
import cameraIcon from "../../assets/cameraIcon.png";

const ProfileSettings = () => {
  return (
    <div className="profile-content">

      <div className="profile-header">
        <h2 className="profile-title">
          Account Settings
        </h2>
      </div>

      <div className="profile-body">

        <div className="profile-user">

          <div className="profile-image">
            <img
              src={profileImage}
              alt="Profile"
            />

            <div className="camera-icon">
              <img
                src={cameraIcon}
                alt="Camera Icon"
              />
            </div>
          </div>

          <div className="profile-info">
            <h3 className="profile-name">
              Marry Doe
            </h3>

            <p className="profile-email">
              Marry@gmail.com
            </p>
          </div>

        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam.
        </p>

        <div className="profile-divider"></div>

      </div>

    </div>
  );
};

export default ProfileSettings;