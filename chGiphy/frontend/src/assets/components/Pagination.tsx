type PaginationProps = {
    gifsPerPage: number;
    totalGifs: number;
    currentPage: number;
    setCurrentPage: (pageNumber: number) => void;
};

export default function Pagination({
                                       gifsPerPage,
                                       totalGifs,
                                       currentPage,
                                       setCurrentPage,
                                   }: PaginationProps) {
    const totalPages = Math.ceil(totalGifs / gifsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handlePageClick = (pageNumber: number, e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentPage(pageNumber);
    };

    return (
        <div className="mt-10 flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden justify-center sm:flex sm:flex-1 sm:items-center">

                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">

                            {pageNumbers.map((number) => (
                                    <a
                                    href="#"
                                    onClick={(e) => handlePageClick(number, e)}
                                    className={currentPage === number ?
                                        "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600":
                                        "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"

                                    }>
                                        {number}
                                    </a>
                            ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
