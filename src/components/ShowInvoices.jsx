import React, { useEffect, useState } from 'react';
import { getUserInvoices } from '../services/invoiceServices';
import Pagination from './Pagination';
import SingleInvoice from './SingleInvoice';

const ShowInvoices = () => {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [productPerPage] = useState(4);
    const [currentPage, setcurrentPage] = useState(1);

    const lastIndex = currentPage * productPerPage;
    const firstIndex = lastIndex - productPerPage;

    const handleGetInvoices = async () => {
        const resp = await getUserInvoices();
        if (resp?.ok) {
            setError(null);
            setInvoices(resp.invoices);
            setLoading(false);
            return;
        }
        setError(resp.errors[0]);
    };
    useEffect(() => {
        handleGetInvoices();
    }, []);

    if (loading) {
        return <div>{error ? <p>{error}</p> : <p>Loading...</p>}</div>;
    }
    if (invoices.length === 0) {
        return <div>No Invoices yet!</div>;
    }
    return (
        <div className="showInvoices__container">
            {invoices
                .map((invoice) => (
                    <SingleInvoice
                        key={invoice._id}
                        clientName={invoice.clientName}
                        date={invoice.date}
                        description={invoice.description}
                        invoiceNumber={invoice.invoiceNumber}
                        linkToPay={invoice.linkToPay}
                        totalAmount={invoice.totalAmount}
                    />
                ))
                .slice(firstIndex, lastIndex)}
            <Pagination
                productPerPage={productPerPage}
                currentPage={currentPage}
                setcurrentPage={setcurrentPage}
                totalInvoices={invoices.length}
            />
        </div>
    );
};

export default ShowInvoices;
