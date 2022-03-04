import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import image1 from './image/image1.svg';




export const SignInUser = () => {

    const [credential, setCredential] = useState({ email: "", password: "" })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = credential;
        const response = await fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const json = await response.json();
        console.log(json);

        if (json.success) {
            alert("You are Loggedin successfull")
            navigate('/')
        }else{
            alert("Invalid Creadinatial");
        }

    }

    const onchange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }


    return (
      

           <div className="container-fluid UserLogin" >


                <section className="side">
                    <img src={image1} alt="sdf" />
                </section>

                <section className="main">
                    <div className="login-container">
                        <p className="title">Welcome back</p>
                        <div className="separator"></div>
                        <p className="welcome-message">Please, provide login credential to proceed and have access to all our services</p>

                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="user-form-control">
                                <input type="email" placeholder="Email"  onChange={onchange} id="email" name='email' />
                                <i className="fa-solid fa-envelope"></i>
                            </div>

                            <div className="user-form-control">
                                <input type="password" placeholder="Password" onChange={onchange} id="password" name='password' />
                                <i className="fas fa-lock"></i>
                            </div>


                            <button type='submit' className="submit">Login</button>
                        </form>
                    </div>
                </section>

            </div>



      

    )
}