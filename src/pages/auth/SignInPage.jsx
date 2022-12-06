import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleOnSignIn } from '../../services/authServices';

const SignInPage = () => {
    const [email, setEmail] = useState('cristian@gmail.com');
    const [password, setPassword] = useState('123456');
    const [error, setError] = useState({ ok: false, msg: null });

    const navigate = useNavigate();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const resp = await handleOnSignIn(email, password);
        if (!resp?.ok) {
            console.log(resp);
            setError({ ok: true, msg: resp.msg });
            return;
        }
        setError({ ok: false, msg: null });
        localStorage.setItem('token', resp.token);
        navigate('/');
    };

    return (
        <div className="auth__container">
            <form onSubmit={handleOnSubmit}>
                <h2>SignIn</h2>
                {error.ok ? (
                    <p className="auth__error">{error.msg}</p>
                ) : (
                    <p></p>
                )}
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    onInvalid={(e) =>
                        e.target.setCustomValidity('Email required')
                    }
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    onInvalid={(e) =>
                        e.target.setCustomValidity('Password required')
                    }
                />
                <button>Submit</button>
                <div className="auth__footer">
                    <Link to={'/signUp'}>Not have an account?</Link>
                    <Link to={'/signUp'}>Forgot password</Link>
                </div>
            </form>
        </div>
    );
};

export default SignInPage;
