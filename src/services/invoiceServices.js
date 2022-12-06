import axios from 'axios';

const URL = 'http://localhost:4000/invoice';

const getUserInvoices = async () => {
    const token = localStorage.getItem('token');

    return axios
        .get(URL + '/owner', {
            headers: {
                'x-token': token,
            },
        })
        .then((resp) => {
            return resp.data;
        })
        .catch((err) => {
            return err.response.data;
        });
};

const newInvoice = async (clientName, description, totalAmount, linkToPay) => {
    const token = localStorage.getItem('token');

    const body = {
        clientName,
        description,
        totalAmount,
        linkToPay,
    };

    return axios
        .post(URL + '/new', body, {
            headers: {
                'x-token': token,
            },
        })
        .then((resp) => {
            return resp.data;
        })
        .catch((err) => {
            return err.response.data;
        });
};

export { getUserInvoices, newInvoice };
