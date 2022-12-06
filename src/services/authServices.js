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
            console.log(resp.data);
            return resp.data;
        })
        .catch((err) => {
            return err.response.data;
        });
};

export { handleOnSignUp, handleOnSignIn };
