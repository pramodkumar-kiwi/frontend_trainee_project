import React, { useEffect, useState } from "react";
import "./index.css";

const ValidatedForm = () => {
    const [finalData, setFinalData] = useState(() => {
        // getting local stored value
        const saved = localStorage.getItem("finalDat");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });
    const [errors, setErrors] = useState({
        fName: "",
        lName: "",
        username: "",
        email: "",
        phone: "",
        password:"",
    });
    const SignUp =()=>{
        let items={errors}
        console.warn(items)
    }

    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    const handleChange = (event, finalCheck) => {
        //event.target has input field, finalCheck is for submit time verification
        const { name, value } = finalCheck || event.target;
        let err = "";
        switch (name) {
            case "fName":
                err =
                    value.length < 3
                        ? "First Name must be at least 3 characters long!"
                        : "";
                break;
            case "lName":
                err =
                    value.length < 3
                        ? "Last Name must be at least 3 characters long!"
                        : "";
                break;
            case "username":
                err =
                    value.length < 3
                    ? "username must be at least 3 characters long!"
                    : "";
                    break;
            case "email":
                err = validEmailRegex.test(value) ? "" : "Email is not valid!";
                break;
            case "phone":
                err =
                    value.length !== 10 ? "phone must be 10 digits long!" : "";
                break;
            case "password":
                err =
                    value.length !== 6 ? "password must be 6 digits long!" : "";
                break;
            default:
                break;
        }
        setErrors((prev) => ({ ...prev, [name]: err }));
        return err.length < 1;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let i = 0;
        let dat = {};
        // e.target has form, starting elements are array of input fields
        while (i < 6) {
            dat = { ...dat, [e.target[i].name]: e.target[i].value };
            valid = handleChange(null, {
                name: e.target[i].name,
                value: e.target[i].value,
            });
            i++;
        }
        if (valid) {
            setFinalData((prev) => [...prev, dat]);
            e.target.reset();
        }

    };

    

    useEffect(() => {
        // storing in local storage
        localStorage.setItem("finalDat", JSON.stringify(finalData));
    }, [finalData]);

    return (
        <div className="container">
            <form name="validatedForm" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div
                    className={
                        errors.fName.length > 0
                            ? "form-elem error-col"
                            : "form-elem"
                    }
                >
                    <label htmlFor="fName">First name:</label>
                    <input
                        type="text"
                        id="fName"
                        name="fName"
                        onChange={handleChange}
                    />
                    {errors.fName.length > 0 && (
                        <span className="error">{errors.fName}</span>
                    )}
                </div>
                <div
                    className={
                        errors.lName.length > 0
                            ? "form-elem error-col"
                            : "form-elem"
                    }
                >
                    <label htmlFor="lName">Last name:</label>
                    <input
                        type="text"
                        id="lName"
                        name="lName"
                        onChange={handleChange}
                    />
                    {errors.lName.length > 0 && (
                        <span className="error">{errors.lName}</span>
                    )}
                </div>
                <div
                    className={
                        errors.username.length > 0
                            ? "form-elem error-col"
                            : "form-elem"
                    }
                >
                    <label htmlFor="username">username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={handleChange}
                    />
                    {errors.username.length > 0 && (
                        <span className="error">{errors.username}</span>
                    )}
                </div>
                <div
                    className={
                        errors.email.length > 0
                            ? "form-elem error-col"
                            : "form-elem"
                    }
                >
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={handleChange}
                    />
                    {errors.email.length > 0 && (
                        <span className="error">{errors.email}</span>
                    )}
                </div>
                <div
                    className={
                        errors.phone.length > 0
                            ? "form-elem error-col"
                            : "form-elem"
                    }
                >
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="number"
                        id="phone"
                        name="phone"
                        onChange={handleChange}
                    />
                    {errors.phone.length > 0 && (
                        <span className="error">{errors.phone}</span>
                    )}
                </div>
                <div
                    className={
                        errors.password.length > 0
                            ? "form-elem error-col"
                            : "form-elem"
                    }
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        onChange={handleChange}
                    />
                    {errors.password.length > 0 && (
                        <span className="error">{errors.password}</span>
                    )}
                </div>
                <input type="submit" className="submit" value="submit" onClick={SignUp} />
            </form>
        </div>
    );
};

export default ValidatedForm;