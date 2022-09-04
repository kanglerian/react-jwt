import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                username: username,
                email: email,
                password: password,
                confPassword: confPassword
            });
            navigate("/");
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
                                    <label className="label">Username</label>
                                    <div className="controls">
                                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="field mt-4">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="******" />
                                    </div>
                                </div>
                                <div className="field mt-4">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} className="input" placeholder="******" />
                                    </div>
                                </div>
                                <div className="field mt-4">
                                    <button type='submit' className="button is-success is-fullwidth">register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;