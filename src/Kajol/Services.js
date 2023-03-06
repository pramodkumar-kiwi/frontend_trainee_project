import axios from 'axios'


export const postData = async (data) => {
    const response = await axios.post(`https://e1f5-111-93-193-70.in.ngrok.io/apidoc/user/Signin/`, data);
    return response.data;
}

// export const postData = async (data) => {
//     const response = await axios.post(`https://e1f5-111-93-193-70.in.ngrok.io/apidoc/user/${process.env.REACT_APP_SIGN_IN_API}/`, data);
//     return response.data;
// }



