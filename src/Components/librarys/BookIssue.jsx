import React, { useState } from 'react'

function BookIssue() {
	const [querry, setquerry] = useState()
    const [SearchData, setSearchData] = useState()
	const [BookLists, setBookLists] = useState([


		{
			ID: "IB853629",
			issueDate: "20 Apr 2024",
			returnDate: "19 May 2024",
			img: "assets/img/students/student-01.jpg",
			name: "Janet",
			class: "III, A",
			booksIssued: 1,
			booksReturned: 0
		},
		{
			ID: "IB853628",
			issueDate: "24 Apr 2024",
			returnDate: "20 May 2024",
			img: "assets/img/students/student-01.jpg",
			name: "Joann",
			class: "IV, B",
			booksIssued: 5,
			booksReturned: 3
		},
		{
			ID: "IB853627",
			issueDate: "02 May 2024",
			returnDate: "01 Jun 2024",
			img: "assets/img/students/student-01.jpg",
			name: "Kathleen",
			class: "III, A",
			booksIssued: 4,
			booksReturned: 2
		},
		{
			ID: "IB853626",
			issueDate: "16 May 2024",
			returnDate: "15 Jun 2024",
			img: "assets/img/students/student-01.jpg",
			name: "Gifford",
			class: "I, B",
			booksIssued: 3,
			booksReturned: 2
		},
		{
			ID: "IB853625",
			issueDate: "22 May 2024",
			returnDate: "20 Jun 2024",
			img: "assets/img/students/student-01.jpg",
			name: "Lisa",
			class: "II, B",
			booksIssued: 6,
			booksReturned: 4
		},
		{
			ID: "IB853624",
			issueDate: "10 Jun 2024",
			returnDate: "08 Jul 2024",
			img: "assets/img/students/student-01.jpg",
			name: "Ralph",
			class: "III, B",
			booksIssued: 4,
			booksReturned: 2
		},
		{
			ID: "IB853623",
			issueDate: "15 Jun 2024",
			returnDate: "14 Jul 2024",
			img: "assets/img/students/student-01.jpg",
			name: "Julie",
			class: "V, A",
			booksIssued: 5,
			booksReturned: 3
		},
		{
			ID: "IB853622",
			issueDate: "26 Jun 2024",
			returnDate: "25 Jul 2024",
			img: "assets/img/students/student-01.jpg",
			name: "Ryan",
			class: "VII, B",
			booksIssued: 3,
			booksReturned: 1
		},
		{
			ID: "IB853621",
			issueDate: "06 Jul 2024",
			returnDate: "05 Aug 2024",
			img: "assets/img/students/student-01.jpg",
			name: "Susan",
			class: "VIII, B",
			booksIssued: 6,
			booksReturned: 4
		},
		{
			ID: "IB853620",
			issueDate: "18 Jul 2024",
			returnDate: "16 Aug 2024",
			img: "assets/img/students/student-01.jpg",
			name: "Richard",
			class: "VII, B",
			booksIssued: 2,
			booksReturned: 1
		},


	])
	const sortFunctions = {
        asc: (a, b) => a.bookName.localeCompare(b.bookName),
        desc: (a, b) => b.bookName.localeCompare(a.bookName),
        recentlyViewed: () => [...BookLists].reverse(),
        recentlyAdded: (a, b) => new Date(b.postDate) - new Date(a.postDate),
    };
    const handleSort = (type) => {
        const sortedBooks =
            type === 'recentlyViewed' ? sortFunctions[type]()
                : [...BookLists].sort(sortFunctions[type]);
        setBookLists(sortedBooks);
    };

    function SearchFilter(v) {
        setquerry(v)
        const filterData = BookLists.filter((data) => 
            (data?.name ? data?.name.toLowerCase().includes(v.toLowerCase()) : false) ||(data?.ID ? data?.ID.toString().includes(v.toLowerCase()) : false)
           
        );
        
        setSearchData(filterData);

    }
	return (
		<>
			{/* <!-- Main Wrapper --> */}
			<div className="main-wrapper container mt-5">



				{/* <!-- Page Wrapper --> */}
				<div className="page-wrapper">
					<div className="content">
						{/* <!-- Page Header --> */}
						<div className="d-md-flex d-block align-items-center justify-content-between mb-3">
							<div className="my-auto mb-2">
								<h3 className="page-title mb-1">Issue Book</h3>
								<nav>
									<ol className="breadcrumb mb-0">
										<li className="breadcrumb-item">
											<a href="index.html">Dashboard</a>
										</li>
										<li className="breadcrumb-item">
											<a href="javascript:void(0);">Management
											</a>
										</li>
										<li className="breadcrumb-item active" aria-current="page">Issue Book</li>
									</ol>
								</nav>
							</div>
							<div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
								<div className="pe-1 mb-2">
									<a href="#" className="btn btn-outline-light bg-white btn-icon me-1" data-bs-toggle="tooltip"
										data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Refresh">
										<i className="ti ti-refresh"></i>
									</a>
								</div>
								<div className="pe-1 mb-2">
									<button type="button" className="btn btn-outline-light bg-white btn-icon me-1"
										data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Print"
										data-bs-original-title="Print">
										<i className="ti ti-printer"></i>
									</button>
								</div>
								<div className="dropdown me-2 mb-2">
									<a href="javascript:void(0);"
										className="dropdown-toggle btn btn-light fw-medium d-inline-flex align-items-center"
										data-bs-toggle="dropdown">
										<i className="ti ti-file-export me-2"></i>Export
									</a>
									<ul className="dropdown-menu  dropdown-menu-end p-3">
										<li>
											<a href="javascript:void(0);" className="dropdown-item rounded-1"><i
												className="ti ti-file-type-pdf me-1"></i>Export as PDF</a>
										</li>
										<li>
											<a href="javascript:void(0);" className="dropdown-item rounded-1"><i
												className="ti ti-file-type-xls me-1"></i>Export as Excel </a>
										</li>
									</ul>
								</div>

							</div>
						</div>
						{/* <!-- /Page Header --> */}

						{/* <!-- Students List --> */}
						<div className="card">
							<div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
								<h4 className="mb-3">Issue Book</h4>
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
												<th>Date of Issue</th>
												<th>Due Date</th>
												<th>Issue To</th>
												<th>Books Issued</th>
												<th>Book Returned</th>
												<th>Issue Status</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
										{(SearchData || BookLists).map((issue, index) =>

													<tr key={index}>
														
														<td><a href="#" className="link-primary">{issue.ID}</a></td>
														<td>{issue.issueDate}</td>
														<td>{issue.returnDate}</td>
														<td>
															<div className="d-flex align-items-center">
																<a href="student-details.html" className="avatar avatar-md"><img
																	src={issue.img}
																	className="img-fluid rounded-circle" alt="img" /></a>
																<div className="ms-2">
																	<p className="text-dark mb-0"><a href="student-details.html">{issue.name}</a>
																	</p>
																	<span className="fs-12">{issue.class}</span>
																</div>
															</div>
														</td>
														<td>{issue.booksIssued}</td>
														<td>{issue.booksReturned}</td>
														<td>Book Issued</td>
														<td>
															<a href="#" className="btn btn-light add-fee" data-bs-toggle="modal"
																data-bs-target="#book_details">View Details</a>
														</td>
													</tr>
												)
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


				{/* <!-- Book Details --> */}
				<div className="modal fade" id="book_details">
					<div className="modal-dialog modal-dialog-centered  modal-lg">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">View Details</h4>
								<button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal"
									aria-label="Close">
									<i className="ti ti-x"></i>
								</button>
							</div>
							<div className="modal-body">
								<div className="view-book">
									<div className="view-book-title">
										<h5>Issue Book Details</h5>
									</div>
									<div className="book-issue-details">

										<div className="book-details-head">
											<span className="text-primary">IB853629</span>
											<h6><span>Issue Date :</span> 19 May 2024</h6>
										</div>
										<ul className="book-taker-info">
											<li>
												<div className="d-flex align-items-center">
													<span className="student-img">
														<img src="assets/img/students/student-01.jpg"
															className="img-fluid rounded-circle" alt="Img" />
													</span>
													<h6>Janet <br /> III, A</h6>
												</div>
											</li>
											<li>
												<span>Roll No</span>
												<h6>35010</h6>
											</li>
											<li>
												<span>Book Name</span>
												<h6>Echoes of Eternity</h6>
											</li>
											<li>
												<span>Book No</span>
												<h6>501</h6>
											</li>
											<li>
												<span>Due Date</span>
												<h6>19 May 2024</h6>
											</li>
											<li>
												<span>Book Remark</span>
												<h6>fee for let submition</h6>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Book Details --> */}
			</div>
			{/* <!-- /Main Wrapper -->  */}
		</>
	)
}

export default BookIssue