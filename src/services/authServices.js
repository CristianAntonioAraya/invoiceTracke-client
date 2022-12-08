import axios from 'axios';

const URL = 'http://localhost:4000';

const handleOnSignUp = async (userName, email, password) => {
    const body = { userName, email, password };
    return axios
        .post(URL + '/user/signup', body)
        .then((resp) => {
            console.log(resp.data);
            return resp.data;
        })
        .catch((err) => {
            return err.response.data;
        });
};
const handleOnSignIn = async (email, password) => {
    const body = { email, password };
    return axios
        .post(URL + '/user/signin', body)
        .then((resp) => {
            return resp.data;
        })
        .catch((err) => {
            return err.response.data;
        });
};

const sendForgotEmail = async (email) => {
    const body = { email };
    return axios
        .post(URL + '/user/restore', body)
        .then((resp) => {
            return resp.data;
        })
        .catch((err) => {
            return err.response.data;
        });
};

const validateToken = async (header, payload, signature) => {
    const body = { token: header + '.' + payload + '.' + signature };
    return axios
        .post(URL + '/user/validate', body)
        .then((resp) => {
            return resp.data;
        })
        .catch((err) => {
            return err.response.data;
        });
};

const handleUpdatePasswords = async (id, email, userName, password) => {
    const body = { userName, password, email };
    return axios
        .put(URL + `/user/update/${id}`, body)
        .then((resp) => {
            return resp.data;
        })
        .catch((err) => {
            return err.response.data;
        });
};

export {
    handleOnSignUp,
    handleOnSignIn,
    sendForgotEmail,
    validateToken,
    handleUpdatePasswords,
};
