const Pagination = ({
    productPerPage,
    currentPage,
    setcurrentPage,
    totalInvoices,
}) => {
    const pageNumbers = [];

    for (
        let index = 1;
        index <= Math.ceil(totalInvoices / productPerPage);
        index++
    ) {
        pageNumbers.push(index);
    }

    const handleNextPage = () => {
        if (currentPage === pageNumbers.length) {
            setcurrentPage(1);
            return;
        }
        setcurrentPage(currentPage + 1);
    };
    const handlePreviousPage = () => {
        if (currentPage === 1) {
            return;
        }
        setcurrentPage(currentPage - 1);
    };

    return (
        <div className="pagination__container">
            <button
                className={`pagination__button ${
                    currentPage === 1 ? 'opacity' : ''
                }`}
                onClick={handlePreviousPage}
            >
                previous
            </button>

            <div>
                {pageNumbers.map((page) => (
                    <a
                        className={currentPage === page ? 'activePage' : ''}
                        key={page}
                    >
                        {page}
                    </a>
                ))}
            </div>
            <button className="pagination__button" onClick={handleNextPage}>
                {' '}
                next
            </button>
        </div>
    );
};

export default Pagination;
