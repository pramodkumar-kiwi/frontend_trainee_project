import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './index.css'
import { signIn_postData } from '../Services';
import { error } from '../Constants'

const LoginPage = () => {

    const navigate = useNavigate();
    
    const [err, setErr] = useState(false);

    const handleChange = () => {
        setErr(false);
    }

    return (
        <div className='myLogin-bg-img'>
            <div className='myLogin-form'>
                {err ? <p className='myLogin-err'>{error}</p> : ""}
                <h1 className='myLogin-heading'>Login Page</h1>

                <Formik
                    initialValues={{ username: '', password: '' }}

                    validate={values => {
                        const errors = {};
                        if (!values.username) {
                            errors.username = 'Username is required';
                        }
                        if (!values.password) {
                            errors.password = 'Password is required';
                        }
                        return errors;
                    }}

                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false);
                        signIn_postData({
                            username: values.username,
                            password: values.password
                        }).then((response) => {
                            setErr(false);
                            
                            localStorage.setItem("accessToken", response.access);
                            localStorage.setItem("refreshToken", response.refresh);

                            navigate("/photoGallery");
                        })
                            .catch((error) => {
                                setErr(true);
                            });
                    }}>

                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                <Field type="text" name="username" className='myLogin-inputs' placeholder="Enter Username" onClick={handleChange}
                        />
                                <ErrorMessage name="username" component="div" className='myLogin_error_msg' />
                            </div>
                            <div>
                                <Field type="password" name="password" className='myLogin-inputs' placeholder="Enter Password" onClick={handleChange}
                                />
                                <ErrorMessage name="password" component="div" className='myLogin_error_msg' />
                            </div>
                            <button type="submit" disabled={isSubmitting} className="myLogin_btn">
                                Login
                            </button>

                            <hr className='.myLogin_hr' />
                            <p style={{ textAlign: "center" }}>Don't have an account?<Link to='/signUp' className='myLogin_myLink'>Sign Up</Link></p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );

}

export default LoginPage
