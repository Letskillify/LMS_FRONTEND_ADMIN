import React, { useState } from 'react'

function Library() {
    const [querry, setquerry] = useState()
    const [SearchData, setSearchData] = useState()
    const [members, setmembers] = useState([
        {
            "id": "LM823748",
            "member": "James",
            "img": "assets/img/members/members-01.jpg",
            "cardNo": 501,
            "email": "[email protected]",
            "dateOfJoin": "22 Apr 2024",
            "mobile": "+1 78429 82414"
        },
        {
            "id": "LM823747",
            "member": "Garcia",
            "img": "assets/img/members/members-01.jpg",
            "cardNo": 502,
            "email": "[email protected]",
            "dateOfJoin": "30 Apr 2024",
            "mobile": "+1 37489 46485"
        },
        {
            "id": "LM823746",
            "member": "Frank",
            "img": "assets/img/members/members-01.jpg",
            "cardNo": 503,
            "email": "[email protected]",
            "dateOfJoin": "05 May 2024",
            "mobile": "+1 87651 64816"
        },
        {
            "id": "LM823745",
            "member": "Jennie",
            "img": "assets/img/members/members-01.jpg",
            "cardNo": 504,
            "email": "[email protected]",
            "dateOfJoin": "16 May 2024",
            "mobile": "+1 49879 86498"
        },
        {
            "id": "LM823744",
            "member": "Paul",
            "img": "assets/img/members/members-01.jpg",
            "cardNo": 505,
            "email": "[email protected]",
            "dateOfJoin": "28 May 2024",
            "mobile": "+1 69787 87984"
        },
        {
            "id": "LM823743",
            "member": "Elaine",
            "img": "assets/img/members/members-01.jpg",
            "cardNo": 506,
            "email": "[email protected]",
            "dateOfJoin": "06 Jun 2024",
            "mobile": "+1 98764 84984"
        },
        {
            "id": "LM823742",
            "member": "Jackson",
            "img": "assets/img/members/members-01.jpg",
            "cardNo": 507,
            "email": "[email protected]",
            "dateOfJoin": "10 Jun 2024",
            "mobile": "+1 46876 55498"
        },
        {
            "id": "LM823741",
            "member": "Kerry",
            "img": "assets/img/members/members-01.jpg",
            "cardNo": 508,
            "email": "[email protected]",
            "dateOfJoin": "18 Jun 2024",
            "mobile": "+1 79468 87467"
        },
        {
            "id": "LM823740",
            "member": "Roger",
            "img": "assets/img/members/members-01.jpg",
            "cardNo": 509,
            "email": "[email protected]",
            "dateOfJoin": "20 Jul 2024",
            "mobile": "+1 65598 64658"
        },
        {
            "id": "LM823739",
            "member": "Denise",
            "img": "assets/img/members/members-01.jpg",
            "cardNo": 510,
            "email": "[email protected]",
            "dateOfJoin": "26 Jul 2024",
            "mobile": "+1 57866 68746"
        }
    ])

    const sortFunctions = {
        asc: (a, b) => a.bookName.localeCompare(b.bookName),
        desc: (a, b) => b.bookName.localeCompare(a.bookName),
        recentlyViewed: () => [...members].reverse(),
        recentlyAdded: (a, b) => new Date(b.postDate) - new Date(a.postDate),
    };
    const handleSort = (type) => {
        const sortedBooks =
            type === 'recentlyViewed' ? sortFunctions[type]()
                : [...members].sort(sortFunctions[type]);
        setmembers(sortedBooks);
    };

    function SearchFilter(v) {
        setquerry(v)
        const filterData = members.filter((data) =>
            (data?.member ? data?.member?.toLowerCase()?.includes(v?.toLowerCase()) : false) ||
            (data?.id ? data?.id?.toLowerCase()?.includes(v?.toLowerCase()) : false) ||
            (data?.cardNo ? data?.cardNo.toString().includes(v?.toLowerCase()) : false)
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
                                <h3 className="page-title mb-1">Library Members</h3>
                                <nav>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">Dashboard</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="javascript:void(0);">Management</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Library Members</li>
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
                                <div className="mb-2">

                                    <a href="#" className="btn btn-primary d-flex align-items-center" data-bs-toggle="modal"
                                        data-bs-target="#add_library_members"><i className="ti ti-square-rounded-plus me-2"></i>Add
                                        member</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Page Header --> */}


                        <div className="card">
                            <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
                                <h4 className="mb-3">
                                    Library Members List</h4>
                                <div className="d-flex align-items-center flex-wrap">
                                    <div className="input-icon-start mb-3 me-2 position-relative">
                                        <span className="icon-addon">
                                            <i className="ti ti-search"></i>
                                        </span>
                                        <input type="text" value={querry} onChange={(e) => SearchFilter(e.target.value)} className="form-control date-range bookingrange" placeholder="Select"
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

                                {/* <!-- Library Members List --> */}
                                <div className="custom-datatable-filter table-responsive">
                                    <table className="table datatable">
                                        <thead className="thead-light">
                                            <tr>
                                              
                                                <th>ID</th>
                                                <th>Member</th>
                                                <th>Card No</th>
                                                <th>Email</th>
                                                <th>Date of Join</th>
                                                <th>Mobile</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(SearchData || members).map((member, index) =>
                                                <tr key={index}>
                                                   
                                                    <td><a href="#" className="link-primary">{member.id}</a></td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="#" className="avatar avatar-md"><img
                                                                src={member.img}
                                                                className="img-fluid rounded-circle" alt="img" /></a>
                                                            <div className="ms-2">
                                                                <p className="text-dark mb-0"><a href="#">{member.member}</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{member.cardNo}</td>
                                                    <td>"<a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c1aba0aca4b281a4b9a0acb1ada4efa2aeac">{member.email}</a>
                                                    </td>
                                                    <td>{member.dateOfJoin}</td>
                                                    <td>{member.mobile}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="dropdown">
                                                                <a href="#"
                                                                    className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="ti ti-dots-vertical fs-14"></i>
                                                                </a>
                                                                <ul className="dropdown-menu dropdown-menu-right p-3">

                                                                    <li>
                                                                        <a className="dropdown-item rounded-1" href="#"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_library_members"><i
                                                                                className="ti ti-edit-circle me-2"></i>Edit</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1" href="#"
                                                                            data-bs-toggle="modal" data-bs-target="#delete-modal"><i
                                                                                className="ti ti-trash-x me-2"></i>Delete</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                            }

                                        </tbody>
                                    </table>
                                </div>
                                {/* <!-- /Library Members List --> */}
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- /Page Wrapper --> */}

                {/* <!-- Add Member --> */}
                <div className="modal fade" id="add_library_members">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Member</h4>
                                <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal"
                                    aria-label="Close">
                                    <i className="ti ti-x"></i>
                                </button>
                            </div>
                            <form action="library-members.html">
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Card No</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Date of Join</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="mb-0">
                                                <label className="form-label">Phone Number</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <a href="#" className="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
                                    <button type="submit" className="btn btn-primary">Add Member</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <!-- Add Member --> */}

                {/* <!-- Edit Member --> */}
                <div className="modal fade" id="edit_library_members">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Member</h4>
                                <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="modal"
                                    aria-label="Close">
                                    <i className="ti ti-x"></i>
                                </button>
                            </div>
                            <form action="library-members.html">
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control" placeholder="Enter Name" value="James" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Card No</label>
                                                <input type="text" className="form-control" placeholder="Enter Card No" value="501" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input type="text" className="form-control" placeholder="Enter Email"
                                                    value="james@example.com" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Date of Join</label>
                                                <input type="text" className="form-control" placeholder="Enter Date of Join"
                                                    value="22 Apr 2024" />
                                            </div>
                                            <div className="mb-0">
                                                <label className="form-label">Phone Number</label>
                                                <input type="text" className="form-control" placeholder="Enter Phone Number"
                                                    value="+1 78429 82414" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <a href="#" className="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
                                    <button type="submit" className="btn btn-primary">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <!-- Edit Member --> */}

                {/* <!-- Delete Modal --> */}
                <div className="modal fade" id="delete-modal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <form action="library-members.html">
                                <div className="modal-body text-center">
                                    <span className="delete-icon">
                                        <i className="ti ti-trash-x"></i>
                                    </span>
                                    <h4>Confirm Deletion</h4>
                                    <p>You want to delete all the marked items, this cant be undone once you delete.</p>
                                    <div className="d-flex justify-content-center">
                                        <a href="javascript:void(0);" className="btn btn-light me-3"
                                            data-bs-dismiss="modal">Cancel</a>
                                        <button type="submit" className="btn btn-danger">Yes, Delete</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <!-- /Delete Modal --> */}

            </div>
        </>
    )
}


export default Library