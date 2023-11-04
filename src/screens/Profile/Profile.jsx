import React, { useEffect } from "react";
import ProfileSidebar from "./ProfileSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import ProfileControllButtons from "../Profile/ProfileControllButtons"

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("account");
  }, [navigate]);

  return (
    <div className="profile">
      <div className="profile-container">
        <h1 className="profile-title">Personal cabinet</h1>
        <div className="profile-content">
          <ProfileSidebar />
          <ProfileControllButtons/>
          <div className="profile-info">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
