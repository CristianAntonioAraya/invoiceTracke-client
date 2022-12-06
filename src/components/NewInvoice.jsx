import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { newInvoice } from '../services/invoiceServices';

const NewInvoice = () => {
    const [clientName, setClientName] = useState('cliente 1');
    const [description, setDescription] = useState('esta es la descripcion');
    const [totalAmount, setTotalAmount] = useState('100');
    const [linkToPay, setLinkToPay] = useState('http://www.pago.com');

    const navigate = useNavigate();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const resp = await newInvoice(
            clientName,
            description,
            totalAmount,
            linkToPay
        );
        if (resp.ok) {
            navigate(0);
        }
    };

    return (
        <form className="newInvoice__container" onSubmit={handleOnSubmit}>
            <h3>ADD NEW INVOICE</h3>
            <input
                onChange={(e) => setClientName(e.target.value)}
                value={clientName}
                placeholder="Client Name"
            ></input>
            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Description"
            ></input>
            <input
                onChange={(e) => setTotalAmount(e.target.value)}
                value={totalAmount}
                placeholder="Total Amount"
            ></input>
            <input
                onChange={(e) => setLinkToPay(e.target.value)}
                value={linkToPay}
                placeholder="Link To Pay"
            ></input>
            <button>Submit</button>
        </form>
    );
};

export default NewInvoice;
