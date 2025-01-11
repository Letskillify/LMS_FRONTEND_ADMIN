import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { EditApi, getApi } from '../Custom Hooks/CustomeHook';

function BookIssue() {
	const [querry, setquerry] = useState()
	const [SearchData, setSearchData] = useState()
	const [BookLists, setBookLists] = useState([])



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
			(data?.name ? data?.name.toLowerCase().includes(v.toLowerCase()) : false) || (data?.ID ? data?.ID.toString().includes(v.toLowerCase()) : false)

		);

		setSearchData(filterData);

	}
	useEffect(() => {
		axios.get('/api/library/get').then(res => setBookLists(res.data)
		).catch(err => console.log(err))
	}, [])
	
	const handleConform = (id) => {
		EditApi(`/api/library/update/${id}`, { status: "Issued" }, "Book Issue Successfully")
			.then(() => {
				// Hide the modal after the API call is successful
				const modalElement = document.getElementById('book_details');
				const modalInstance = bootstrap.Modal.getInstance(modalElement);
				if (modalInstance) {
					modalInstance.hide();
				}
			})
			.catch((error) => {
				console.error("Error issuing book:", error);
			});
	};
	const handleReturn = (id) => {
		EditApi(`/api/library/update/${id}`, { status: "Returned" }, "Book Issue Successfully")
			.then(() => {
				// Hide the modal after the API call is successful
				const modalElement = document.getElementById('book_details');
				const modalInstance = bootstrap.Modal.getInstance(modalElement);
				if (modalInstance) {
					modalInstance.hide();
				}
			})
			.catch((error) => {
				console.error("Error issuing book:", error);
			});
	};

	// const handleReject = (id) => {
	// 	EditApi(`/api/library/update/${id}`, { status: "Returned" }, "Book successfully returned")
	// 		.then(() => {
	// 			// Hide the modal after the API call is successful
	// 			const modalElement = document.getElementById('book_details');
	// 			const modalInstance = bootstrap.Modal.getInstance(modalElement);
	// 			if (modalInstance) {
	// 				modalInstance.hide();
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error issuing book:", error);
	// 		});
	// };

	return (
		<>
			{/* <!-- Main Wrapper --> */}
			<div className="main-wrapper container" oveflow="auto">



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
												className="ti ti-file-type-xls "></i>Export as Excel </a>
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
												<th> Book Name</th>
												<th>Book publisher</th>
												<th>Student Name</th>
												<th>Student Class</th>
												<th>requested Date</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											{(SearchData || BookLists).map((issue, index) =>

												<tr key={index}>

													<td><a href="#" className="link-primary">{issue.bookID?.bookID}</a></td>
													<td>{issue?.issueDate ? new Date(issue?.issueDate)?.toISOString().split("T")[0] : ""}</td>
													<td>{issue?.dueDate ? new Date(issue?.dueDate)?.toISOString().split("T")[0] : ""}</td>

													<td>
														<div className="d-flex align-items-center">
															<div className="ms-2">
																<p className="text-dark mb-0"><a href="student-details.html">{issue.bookID?.bookName}</a>
																</p>
																<span className="fs-12">{issue?.bookID?.publicationYear}</span>
															</div>
														</div>
													</td>
													<td>{issue?.bookID?.publisher}</td>
													<td>{issue?.studentID?.personalDetails?.firstName}</td>
													<td>{issue?.studentID?.class}</td>
													<td>{issue?.requestedDate ? new Date(issue?.requestedDate)?.toISOString().split("T")[0] : ""}</td>
													<td className=''>
														<a href="#" className="btn btn-light add-fee border " data-bs-toggle="modal"
															data-bs-target="#book_details">view</a>
													</td>
													{/* <!-- Book Details --> */}
													<div class="modal fade bookissue-popup" id="book_details">
														<div class="modal-dialog modal-dialog-centered modal-lg">
															<div class="modal-content">
																{/* <!-- Modal Header --> */}
																<div class="modal-header">
																	<h4 class="modal-title">Details</h4>
																	<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
																</div>
																{/* <!-- Modal Body --> */}
																<div class="modal-body">
																	{/* <img src={issue?.bookID?.coverImageURL} className=" rounded-circle " alt="img"  style={{textAlign:"center"}}/> */}
																	{/* <!-- Personal Information Section --> */}
																	<div class="section">
																		<div class="row">
																			<div class="col-md-4 ">
																				<img src="https://m.media-amazon.com/images/I/71rwXolXIlL._UF1000,1000_QL80_.jpg" className=" " alt="img" style={{ width: "100%", height: "200px" }} />
																			</div>
																			<div className="col-8">
																				<div class="info-box mb-4 mt-2">
																					<label>Book Number</label>
																					<p>{issue.bookID?.bookNumber}</p>
																				</div>
																				<div class="info-box">
																					<label>Book Request Date</label>
																					<p>{issue?.requestedDate ? new Date(issue?.requestedDate)?.toISOString().split("T")[0] : ""}</p>
																				</div>

																			</div>
																		</div>
																		<div className="row">
																			<div class="col-md-6 info-box mt-2">
																				<label>Student ID</label>
																				<p>{issue?.studentID?.personalDetails?.firstName + " " + issue?.studentID?.personalDetails?.lastName}</p>
																				{/* <p>{issue?.studentID?.studentID}</p> */}
																			</div>
																			<div class="col-md-6 info-box mt-2">
																				<label>Book Name</label>
																				<p>{issue.bookID?.bookName}</p>
																			</div>
																			<div class="col-md-6 info-box">
																				<label>Contact</label>
																				<p>{issue.studentID?.contactInfo?.mobile ? issue.studentID?.contactInfo?.mobile : issue.studentID?.contactInfo?.email}</p>
																			</div>
																			<div class="col-md-6 info-box">
																				<label>Author</label>
																				<p>{issue.bookID?.author}</p>
																			</div>
																		</div>

																		{/* </div> */}
																	</div>

																	{/* <!-- Fee Status Section --> */}
																	<div class="section">
																		<div class="row">
																			<div class="col-md-4 text-center">
																				<div class="status-box border" style={{ backgroundColor: "#a0a6aa87" }}>
																					<label className='color-dark'>Price</label>
																					<h5>₹ {issue?.bookID?.price}</h5>
																				</div>
																			</div>
																			<div class="col-md-4 text-center">
																				<div class="status-box" style={{ backgroundColor: "rgb(148 109 109 / 84%)" }}>
																					<label>Due Date</label>
																					<p>{issue?.dueDate ? new Date(issue?.dueDate)?.toISOString().split("T")[0] : ""}</p>
																				</div>
																			</div>
																			<div class="col-md-4 text-center">
																				<div class="status-box " style={{ backgroundColor: "rgb(150 189 208 / 74%)" }}>
																					<label>Status</label>
																					<h5>{issue?.status}</h5>
																				</div>
																			</div>

																		</div>
																	</div>
																	<div className='text-center'>
																		{issue?.status === "Requested" ? (
																			<div>
																				<button className='btn btn-info me-3' onClick={() => { handleConform(issue?._id) }}>Confirm</button>
																				<button className='btn btn-danger' onClick={() => { handleReject(issue?._id) }}>Reject</button>
																			</div>
																		) : (
																			<div>
																				<button className='btn btn-info me-3' onClick={() => { handleReturn(issue?._id) }}>Returned</button>
																				<button className='btn btn-danger' onClick={() => { handleReject(issue?._id) }}>Overdue</button>
																			</div>
																		)}
																	</div>

																</div>
															</div>
														</div>
													</div>

													{/* <!-- Book Details --> */}
												</tr>
											)}

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



			</div>
			{/* <!-- /Main Wrapper -->  */}
		</>
	)
}

export default BookIssue