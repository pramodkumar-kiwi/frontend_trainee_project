import axios from 'axios'
import { accessToken } from './Constants'

const config = {
    headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "237",
        'Authorization': `Bearer ${localStorage.getItem(accessToken)}`
    }
};


export const albumListing_getData = async (data) => {

    const response = await axios.get(`${process.env.REACT_APP_API}/image/image-gallery/`, config);

    if (response.status === 200) {
        console.log("Status Code 200. Bad Request");
        return response;
    } else {
        console.log("Status Code other than 200. Bad Request");
    }

}

export const imageListing_getData = async (data) => {

    const response = await axios.get(`https://a53f-182-74-85-106.in.ngrok.io/image/image/`, config);

    if (response.status === 200) {
        console.log("JJ");
        return response;
    } else {
        console.log("Status Code other than 200. Bad Request");
    }

}

/* This is to get tokens as response from the Sign-in API after the correct credentials are sent */
export const signIn_postData = async (data) => {
    const response = await axios.post(`${process.env.REACT_APP_API}/user/signin/`, data);
    return response.data;
}

// This is to log-out the current logged-in user after the bearer is passed
export const signOut_postData = async (data) => {
    const response = await axios.post(`${process.env.REACT_APP_API}/user/sign-out/`, data);
    return response.data;
}



