import React, { useState } from 'react';
import { sendForgotEmail } from '../../services/authServices';

const ForgotPassPage = () => {
    const [email, setEmail] = useState('dev.arayacristian@gmail.com');

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const resp = await sendForgotEmail(email);
        console.log(resp);
    };

    return (
        <div className="auth__container">
            <form onSubmit={handleOnSubmit}>
                <h2>Forgot Password</h2>
                <label>Email:</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ForgotPassPage;
