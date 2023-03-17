import axios from "axios";

export const signIn_postData = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API}/user/signin/`,
    data

  );
  console.log(process.env.REACT_APP_API)
  return response.data;
};

export const signOut_postData = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API}/sign-out/`,
    data
  );
  return response.data;
};
// export const Signup_getdata= async(value)=>{
//     const config = {
//         headers: { "Content-Type": "application/json",
//          "ngrok-skip-browser-warning":"237"
//        },
//     };
//     const response =  await axios.get(
//         `${process.env.REACT_APP_API}username-validator/0/?username=${value}`,
//         config
//     );
//     if(response.status === 200){
//       return true;
//     }else{

//     }
//     console.log(response);
// }