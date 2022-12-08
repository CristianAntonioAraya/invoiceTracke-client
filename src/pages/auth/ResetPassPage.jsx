import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    handleUpdatePasswords,
    validateToken,
} from '../../services/authServices';

const ResetPassPage = () => {
    const { header, payload, signature } = useParams();

    const [password, setPassword] = useState('hola123');
    const [confirmPassword, setConfirmPassword] = useState('hola123');
    const [error, setError] = useState({ ok: false, msg: null });
    const [user, setUser] = useState({
        userName: '',
        email: '',
        id: '',
    });

    const handleValidateToken = async () => {
        const resp = await validateToken(header, payload, signature);
        if (!resp?.ok) {
            setError({ ok: true, msg: resp.msg });
            alert(error.msg);
            return;
        }
        setUser({
            userName: resp.userName,
            email: resp.email,
            id: resp.id,
        });
    };

    useEffect(() => {
        handleValidateToken();
    }, []);

    const navigate = useNavigate()

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (validPassword()) {
            const resp = await handleUpdatePasswords(
                user.id,
                user.email,
                user.userName,
                password
            );
            if (!resp?.ok) {
                setError({ ok: true, msg: resp.msg });
                alert(error.msg);
                return;
            }
            setError({ ok: false, msg: null });
            localStorage.setItem('token', resp.token);
            navigate('/');
        }
    };

    const validPassword = () => {
        if (password !== confirmPassword) {
            setError({ ok: false, msg: 'Passwords not match' });
            return false;
        }
        if (password.length < 6) {
            setError({ ok: false, msg: 'Passwords too short' });
            return false;
        }

        return true;
    };

    return (
        <div className="auth__container">
            {error.ok ? <h1>error</h1> : <h1>noerror</h1>}
            <form onSubmit={handleOnSubmit}>
                <h2>Forgot Password</h2>
                <label>Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    onInvalid={(e) =>
                        e.target.setCustomValidity('Password required')
                    }
                />
                <label>Confirm password</label>

                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    onInvalid={(e) =>
                        e.target.setCustomValidity('Confirm password required')
                    }
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ResetPassPage;
