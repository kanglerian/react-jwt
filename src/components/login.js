import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/', {
                email: email,
                password: password,
            });
            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form className="box" onSubmit={submitHandler}>
                                <p className='has-text-center'>{msg}</p>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Type your email in here..." />
                                    </div>
                                </div>
                                <div className="field mt-4">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" />
                                    </div>
                                </div>
                                <div className="field mt-4">
                                    <button type='submit' className="button is-success is-fullwidth">login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;