import axios from 'axios'
import {accessToken} from './Constants'


const config = {
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${ localStorage.getItem(accessToken)}`
    }
  };


  export const imageListing_getData = async (data) => {
    const response = await axios.get(`${process.env.REACT_APP_API}/image/image-gallery/`, config);

    if (response.status === 200){
        console.log(response.data);
        return response.data;
    }else {
        console.log("Bad Request");
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



