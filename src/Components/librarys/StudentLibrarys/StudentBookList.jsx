import React, { useState } from 'react'

function StudentBookList() {
    const [querry, setquerry] = useState()
    const [SearchData, setSearchData] = useState()
    const [studentbook, setstudentbook] = useState([
        {
            "bookID": "LB864723",
            "bookName": "Echoes of Eternity",
            "bookNumber": 501,
            "publisher": "Aurora Press",
            "author": "Isabella Rivers",
            "subject": "History",
            "rackNo": 6550,
            "quantity": 150,
            "availability": 120,
            "price": "$300",
            "postDate": "25 Apr 2024"
        },
        {
            "bookID": "LB864724",
            "bookName": "Whispers of the Forest",
            "bookNumber": 502,
            "publisher": "Emerald Books",
            "author": "Jonathan Silver",
            "subject": "Fiction",
            "rackNo": 1230,
            "quantity": 200,
            "availability": 180,
            "price": "$250",
            "postDate": "18 May 2024"
        },
        {
            "bookID": "LB864725",
            "bookName": "The Quantum Realm",
            "bookNumber": 503,
            "publisher": "TechnoLit",
            "author": "Sophia Grant",
            "subject": "Science",
            "rackNo": 8901,
            "quantity": 300,
            "availability": 250,
            "price": "$500",
            "postDate": "10 Jun 2024"
        },
        {
            "bookID": "LB864726",
            "bookName": "Chronicles of Avalon",
            "bookNumber": 504,
            "publisher": "Mythos Publishing",
            "author": "Edward Lancaster",
            "subject": "Fantasy",
            "rackNo": 4502,
            "quantity": 400,
            "availability": 350,
            "price": "$450",
            "postDate": "01 Jul 2024"
        },
        {
            "bookID": "LB864727",
            "bookName": "Shadows of the Mind",
            "bookNumber": 505,
            "publisher": "Psychology Today",
            "author": "Elena Harper",
            "subject": "Psychology",
            "rackNo": 7021,
            "quantity": 100,
            "availability": 90,
            "price": "$320",
            "postDate": "15 Aug 2024"
        }
    ]
    )

    const sortFunctions = {
        asc: (a, b) => a.bookName.localeCompare(b.bookName),
        desc: (a, b) => b.bookName.localeCompare(a.bookName),
        recentlyViewed: () => [...studentbook].reverse(),
        recentlyAdded: (a, b) => new Date(b.postDate) - new Date(a.postDate),
    };
    const handleSort = (type) => {
        const sortedBooks =
            type === 'recentlyViewed' ? sortFunctions[type]()
                : [...studentbook].sort(sortFunctions[type]);
        setstudentbook(sortedBooks);
    };

    function SearchFilter(v) {
        setquerry(v)
        const filterData = studentbook.filter((data) => 
            (data?.bookName ? data?.bookName.toLowerCase().includes(v.toLowerCase()) : false) ||(data?.bookID ? data?.bookID.toString().includes(v.toLowerCase()) : false) ||(data?.publisher ? data?.publisher.toString().includes(v.toLowerCase()) : false)||(data?.subject ? data?.subjectb.toString().includes(v.toLowerCase()) : false)
           
        );
        
        setSearchData(filterData);

    }
    return (
        <>
            {/* <!-- Page Wrapper --> */}
            <div className="page-wrapper">
                <div className="content">
                    {/* <!-- Students List --> */}
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
                            <h4 className="mb-3">Books</h4>
                            <div className="d-flex align-items-center flex-wrap">
                                <div className="input-icon-start mb-3 me-2 position-relative">
                                    <span className="icon-addon">
                                        <i className="ti ti-search"></i>
                                    </span>
                                    <input type="text" value={querry} onChange={(e) => SearchFilter(e.target.value)} className="form-control date-range bookingrange" placeholder="Search"
                                    />
                                </div>


                                <div className="dropdown mb-3">
                                    <a href="javascript:void(0);" className="btn btn-outline-light bg-white dropdown-toggle"
                                        data-bs-toggle="dropdown"><i className="ti ti-sort-ascending-2 me-2"></i>Sort by A-Z
                                    </a>
                                    <ul className="dropdown-menu p-3">
                                        <li>
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item rounded-1"
                                                onClick={() => handleSort('asc')}
                                            >
                                                Ascending
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item rounded-1"
                                                onClick={() => handleSort('desc')}
                                            >
                                                Descending
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item rounded-1"
                                                onClick={() => handleSort('recentlyViewed')}
                                            >
                                                Recently Viewed
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item rounded-1"
                                                onClick={() => handleSort('recentlyAdded')}
                                            >
                                                Recently Added
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0 py-3">

                            {/* <!-- Student List --> */}
                            <div className="custom-datatable-filter table-responsive">
                                <table className="table datatable">
                                    <thead className="thead-light">
                                        <tr>

                                            <th>ID</th>
                                            <th>Book Name</th>
                                            <th>Book No</th>
                                            <th>Publisher</th>
                                            <th>Author</th>
                                            <th>Subject</th>
                                            <th>Rack No</th>
                                            <th>Qty</th>
                                            <th>Available</th>
                                            <th>Price</th>
                                            <th>Post Date</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {(SearchData || studentbook).map((book, index) => (


                                                <tr key={index}>
                                                    <td><a href="#" className="link-primary">{book.bookID}</a></td>
                                                    <td>{book.bookName}</td>
                                                    <td>{book.bookNumber}
                                                    </td>
                                                    <td>{book.publisher}</td>
                                                    <td> {book.author}</td>
                                                    <td> {book.subject}</td>
                                                    <td> {book.rackNo}</td>
                                                    <td> {book.quantity}</td>
                                                    <td> {book.availability}</td>
                                                    <td> ₹{book.price}</td>
                                                    <td>{book.postDate}</td>
                                                    <td>
                                                        <button className='btn btn-primary'>Issue</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }


                                    </tbody>
                                </table>
                            </div>
                            {/* <!-- /Student List --> */}
                        </div>
                    </div>
                    {/* <!-- /Students List --> */}

                </div>
            </div>
            {/* <!-- /Page Wrapper --> */}
        </>
    )
}

export default StudentBookList