import React, { useState } from 'react'
import axios from 'axios'
import './index.css'

const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);
    const error = "INVALID CREDENTIALS!!! PLEASE TRY AGAIN.";

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/login', { username, password })
            .then((response) => {
                setErr(false);
                setPassword('');
                setUsername('');
                console.log(response.data);
                //navigation in future
            })
            .catch((error) => {
                setErr(true);
                console.log(error);
            });
    }

    return <>
        {/* <div className='body'></div> */}
        <div className='myLogin-bg-img'>
            {/* <div className='login-form-container'> */}
                <form className='myLogin-form'>
                    {setErr ? <p className='myLogin-error_msg'>
                        {error}
                    </p> : ""}

                    <h1 className='myLogin-heading'>Login Page</h1>

                    <label htmlFor="email"><b>Username</b></label>
                    <input type="text" className='myLogin-inputs' placeholder="Enter Username" name="username" value={username} onChange={handleUsernameChange} required />

                    <label htmlFor="password"><b>Password</b></label>
                    <input className='myLogin-inputs' type="password" placeholder="Enter Password" name="password" value={password} onChange={handlePasswordChange} required />

                    <button type="submit" className="myLogin_btn" onClick={handleSubmit}>Login</button>

                    <hr className='.myLogin_hr'/>
                    <p>Don't have an account?</p>

                    <button type="submit" className="myLogin_btn">Sign Up</button>
                </form>
            </div>
        {/* </div> */}

    </>
}

export default LoginPage





{/* { error && <div>{error}</div>} */}