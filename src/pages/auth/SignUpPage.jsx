import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleOnSignUp } from '../../services/authServices';

const SignUpPage = () => {
    const [userName, setUserName] = useState('Cristian Araya');
    const [email, setEmail] = useState('cristian@gmail.com');
    const [password, setPassword] = useState('123456');
    const [error, setError] = useState({ ok: false, msg: null });

    const navigate = useNavigate();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const resp = await handleOnSignUp(userName, email, password, setError);
        if (!resp?.ok) {
            setError({ ok: true, msg: resp.errors[0] });
            return;
        }
        setError({ ok: false, msg: null });
        localStorage.setItem('token', resp.token);
        navigate('/');
    };

    return (
        <div className="auth__container">
            <form onSubmit={handleOnSubmit}>
                <h2>SignUp</h2>
                {error.ok ? (
                    <p className="auth__error">{error.msg}</p>
                ) : (
                    <p></p>
                )}
                <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="UserName"
                    required
                    onInvalid={(e) =>
                        e.target.setCustomValidity('UserName required')
                    }
                />
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
                <Link className="auth__footer" to={'/signIn'}>
                    Already have an account?
                </Link>
            </form>
        </div>
    );
};

export default SignUpPage;
