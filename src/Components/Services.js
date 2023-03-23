import axios from "axios";
import { accessToken } from "./Constants";

const config = {
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "237",
    Authorization: `Bearer ${localStorage.getItem(accessToken)}`,
  },
};

const configg = {
  headers: {
    "ngrok-skip-browser-warning": "237",
  },
};

export const forgotPassword_postData = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API}/user/forget_password/`,
    data,
    configg
  );
  if (response.status === 200) {
    return response;
  }
};

export const Gallery_putData = async (id, data) => {
  const response = await axios.put(
    `${process.env.REACT_APP_API}/gallery/image-gallery/${id}/`,
    data,
    config
  );

  if (response.status === 200) {
    return response;
  }
};

export const ImageListing_deleteData = async (data) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API}/gallery/images/${data}/`,
    config
  );

  if (response.status === 200) {
    return response;
  }
};

export const albumListing_deleteData = async (data) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API}/gallery/image-gallery/${data}/`,
    config
  );

  if (response.status === 200) {
    console.log("Working");
    return response;
  }
};

export const albumListing_getData = async (data) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API}/gallery/image-gallery/`,
    config
  );

  if (response.status === 200) {
    return response;
  }
};

export const imageListing_getData = async (data) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API}/gallery/image-gallery/${data}/`,
    config
  );

  if (response.status === 200) {
    return response;
  }
};



/* This is to get tokens as response from the Sign-in API after the correct credentials are sent */
export const signIn_postData = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API}/user/signin/`,
    data
  );
  if (response.status === 200) {
    return response;
  }
};

// This is to assure that logged in user is a validated user.
export const userProfile_getData = async (data) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API}/user/userprofile/`,
    config
  );

  if (response.status === 200) {
    return response;
  }
};

// This is to log-out the current logged-in user after the bearer is passed
export const signOut_postData = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API}/user/sign-out/`,
    { config, data }
  );
  return response;
};


export const signUp_postData = async(formData, config_multiPart) => {
  const response = await axios.post(
  `${process.env.REACT_APP_API}/user/signup/`,
  formData,
  config_multiPart
);
return response;
}
