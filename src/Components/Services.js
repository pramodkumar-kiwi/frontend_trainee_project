import axios from 'axios'

// const config = {
//     headers: {
//       'Authorization': 'Bearer ' + yourBearerToken
//     }
//   };
//   const response = await axios.get(yourApiEndpoint, config);
//   console.log(response.data);
// }

// This is to get tokens as response from the Sign-in API after the correct credentials are sent 
export const signIn_postData = async (data) => {
    const response = await axios.post(`${process.env.REACT_APP_API}/signin/`, data);
    return response.data;
}

// This is to log-out the current logged-in user after the bearer is passed
export const signOut_postData = async (data) => {
    const response = await axios.post(`${process.env.REACT_APP_API}/sign-out/`,  data);
    return response.data;
}


export const imageListing_getData = async (data) => {
    const response = await axios.post(`${process.env.REACT_APP_API}/sign-out/`,  data);
    return response.data;
}
