import React, { useState, useEffect } from 'react';
import axios from 'axios';

const  Myprofilemodal=({ userId }) => {
    const [user, setUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleClose=()=>{
        setIsOpen(!false)
    }
    useEffect(() => {
      if (userId) {
        axios.get(`https://a53f-182-74-85-106.in.ngrok.io/user/userprofile/`,)
          .then(response => {
            setUser(response.data);
            setIsOpen(true);
          })
          .catch(error => console.log(error));
      }
    }, [userId]);
  
    return (
      <div className={`modal ${isOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={() => setIsOpen(false)}></div>
        <div className="modal-content">
          <div className="box">
            <h1 className="title">User Profile</h1>
            {user && (
              <>
                <p><strong>First Name :</strong> {user.name}</p>
                <p><strong>last Name :</strong> {user.email}</p>
                <p><strong>Email :</strong> {user.address}</p>
                <p><strong>Contact</strong> {user.phone}</p>
              </>
            )}
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={handleClose}>Button</button>
      </div>
    );
  };

export default Myprofilemodal;
