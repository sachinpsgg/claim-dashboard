import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Dashboard from "./Dashboard/dashboard";

export default function Login({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: 'admin@gmail.com',
            password: 'password123'
        };

        if (email === user.email && password === user.password) {
            navigate('/dashboard');
        } else {
            setError('Invalid username or password');
        }
    };
    return (
        <section className="login-page">
            <div className="login-page--container">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="login-page--container--image-section">
                                <img src="/assets/images/Claim.svg" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex align-items-center w-100">
                                <div className="login-page--container--login-form">
                                    <div>
                                        <div href="#" className="login-page--container--login-form--logo">
                                            <img className="w-8 h-8 mr-2" src="/assets/images/logo.png" alt="logo" />

                                        </div>
                                        <div className="login-page--container--login-form--form-content">
                                            <div className="login-page--container--login-form--form-content--box">
                                                <h1>
                                                    Sign in to your account
                                                </h1>
                                                <form className="" action="#" onSubmit={handleSubmit}>
                                                    <div className="mt-4">
                                                        <label className="">Your email</label>
                                                        <input type="email"
                                                               value={email}
                                                               onChange={(e) => setEmail(e.target.value)}
                                                               name="email" id="email" className="" placeholder="name@company.com" required="" />
                                                    </div>
                                                    <div className="mt-4">
                                                        <label for="password" className="">Password</label>
                                                        <input type="password"
                                                               id="password"
                                                               value={password}
                                                               onChange={(e) => setPassword(e.target.value)}
                                                               name="password"
                                                               placeholder="••••••••"
                                                               className=""
                                                               required="" />
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-1">
                                                        <div className="d-flex align-items-start">
                                                            <div className="d-flex align-items-center h-5">
                                                                <input id="remember"
                                                                       aria-describedby="remember" type="checkbox" className="" required="" />
                                                            </div>
                                                            <div className="ml-3">
                                                                <label for="remember" className="">Remember me</label>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="login-page--container--login-form--form-content--box--forgot-password">Forgot password?</a>
                                                    </div>
                                                    <button type="submit" className="">Sign in</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}