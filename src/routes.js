import React from "react";

const Login = React.lazy(()=> import("./Components/Login"));
const Signup = React.lazy(()=> import("./Components/Signup"));

const routes=[
    {
        path: "/login",
        name: "Login",
        secure: false,
        element: Login,
    },
    {
        path: "/Signup",
        name: "Signup",
        secure: false,
        element: Signup,
    },
];
export default routes;