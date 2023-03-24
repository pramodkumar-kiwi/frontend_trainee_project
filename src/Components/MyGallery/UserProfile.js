import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar";
import { accessToken, refreshToken } from "../Constants";
import Modal from "react-modal";
import axios from "axios";

const UserProfile = () => {
  const [openuserModal, setOpenUserModal] = useState(false);
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  // This is to check whether user is authenticated
  useEffect(() => {
    if (
      localStorage.getItem(refreshToken) === null ||
      localStorage.getItem(accessToken) === null
    ) {
      navigate("/");
    }
  });
  useEffect(() => {
    async function fetchUserData() {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "237",
            Authorization: `Bearer ${localStorage.getItem(accessToken)}`,
          },
        };

        const response = await axios.get(
          `${process.env.REACT_APP_API}/user/userprofile/`,

          config
        );
        setUserData(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    // Fetch user data when the modal is opened
    if (openuserModal) {
      fetchUserData();
    }
  }, [openuserModal]);

  const handleOpenProfile = () => {
    setOpenUserModal(!openuserModal);
  };
  const handleCloseModal = () => {
    setOpenUserModal(false);
  };

  // This is to log-out the user and redirect to the log-in page
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="userProfile-container">
        <button className="userProfile-myBtn">Change Password</button>
        <button className="userProfile-myBtn" onClick={handleOpenProfile}>
          Open User Profile
        </button>
        <Modal
          isOpen={openuserModal}
          onRequestClose={handleCloseModal}
          style={{
            overlay: { zIndex: 10 },
            content: {
              width: "15%",
              height: "40%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <button
            onClick={handleCloseModal}
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            X
          </button>

          {userData ? (
            <div>
              <h2>User Details</h2>
              <p>First Name: {userData.data[0].first_name}</p>
              <p>Last Name: {userData.data[0].last_name}</p>
              <p>Username: {userData.data[0].username}</p>
              <p>Email: {userData.data[0].email}</p>
              <p>Contact: {userData.data[0].contact}</p>
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </Modal>
        <button className="userProfile-myBtn" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    </>
  );
};

export default UserProfile;
