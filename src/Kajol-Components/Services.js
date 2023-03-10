import axios from 'axios'

export const signIn_postData = async (data) => {
    const response = await axios.post(`${process.env.REACT_APP_API}/signin/`, data);
    return response.data;
}

export const signOut_postData = async (data) => {
    const response = await axios.post(`${process.env.REACT_APP_API}/sign-out/`,  data);
    return response.data;
}
