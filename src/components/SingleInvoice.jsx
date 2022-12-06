import React from 'react';
import moment from 'moment';

const SingleInvoice = ({
    clientName,
    date,
    description,
    invoiceNumber,
    linkToPay,
    totalAmount,
}) => {
    const formatDate = moment(date).fromNow();

    return (
        <div className="singleInvoice__container">
            <div className="singleInvoice__header">
                <span>{clientName}</span>
                <span>Invoice Number: {invoiceNumber}</span>
            </div>
            <div className="singleInvoice__line" />
            <div className="singleInvoice__description">
                <span>{description}</span>
            </div>
            <div className="singleInvoice__line" />
            <div className="singleInvoice__footer">
                <span>Invoice created {formatDate}</span>
                <span>Total Amount: {totalAmount}</span>
                <button>{linkToPay}</button>
            </div>
        </div>
    );
};

export default SingleInvoice;
