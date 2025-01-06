import React, { useEffect, useState } from 'react'
import wallet from "../assets/img/icons/unicons/wallet.png"
import avatar5 from "../assets/img/avatars/5.png"
import avatar6 from "../assets/img/avatars/6.png"
import avatar1 from "../assets/img/avatars/1.png"
import avatar7 from "../assets/img/avatars/7.png"
import ReactApexChart from 'react-apexcharts'



const classData = [
    {
      className: "1st",
      sections: ["A-12", "B-12"],
      present: 0,
      absent: 0,
      onLeave: 0,
      expected: 0,
      generated: 0,
      paid: 0,
      balance: 0,
    },
    {
      className: "2nd",
      sections: ["A-15", "B-10"],
      present: 0,
      absent: 0,
      onLeave: 0,
      expected: 0,
      generated: 0,
      paid: 0,
      balance: 0,
    },
    {
      className: "2nd",
      sections: ["A-15", "B-10"],
      present: 0,
      absent: 0,
      onLeave: 0,
      expected: 0,
      generated: 0,
      paid: 0,
      balance: 0,
    },
    {
      className: "2nd",
      sections: ["A-15", "B-10"],
      present: 0,
      absent: 0,
      onLeave: 0,
      expected: 0,
      generated: 0,
      paid: 0,
      balance: 0,
    },
    {
      className: "2nd",
      sections: ["A-15", "B-10"],
      present: 0,
      absent: 0,
      onLeave: 0,
      expected: 0,
      generated: 0,
      paid: 0,
      balance: 0,
    },
    {
      className: "2nd",
      sections: ["A-15", "B-10"],
      present: 0,
      absent: 0,
      onLeave: 0,
      expected: 0,
      generated: 0,
      paid: 0,
      balance: 0,
    },
    {
      className: "2nd",
      sections: ["A-15", "B-10"],
      present: 0,
      absent: 0,
      onLeave: 0,
      expected: 0,
      generated: 0,
      paid: 0,
      balance: 0,
    },
  ];

  
function Graph() {
    const [series, setSeries] = useState([
        { name: 'Expense', data: [200, 100, 200, 50, 200, 20, 100] }
    ]);

    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        yaxis: {
            showAlways: false
        },
        xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        }
    });

    const [pieSeries, setPieSeries] = useState(0);

    const [pieOptions, setPieOptions] = useState({
        chart: {
            height: 150,
            width: 150,
            type: 'radialBar'
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '40%'
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: 6,
                        color: "#000",
                        fontSize: "15px",
                        show: true
                    }
                }
            }
        },
        labels: []
    });

    const PieTotal = () => {
        let sum = 0;
        for (let i = 0; i < series[0].data.length; i++) {
            if (series[0].data[i] !== undefined) {
                sum += series[0].data[i];
            }
        }
        return sum;
    };

    const percantage = () => {
        return Math.round(PieTotal() / 1400 * 100);
    };

    useEffect(() => {
        const total = percantage();
        setPieSeries(total);
    }, [series]);

    const optionsRadialGuage = {
        series: [67],
        options: {
            chart: {
                height: 400,
                type: 'radialBar',
                offsetY: -10
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: '16px',
                            color: undefined,
                            offsetY: 120
                        },
                        value: {
                            offsetY: 76,
                            fontSize: '22px',
                            color: undefined,
                            formatter: function (val) {
                                return val + "%";
                            }
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 30, 91]
                }
            },
            stroke: {
                dashArray: 4
            },
            labels: ['Growth']
        }
    };

    const Roptions = {
        chart: {
            type: "rangeBar"
        },
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
        },
        legend: {
            position: "top"
        },
        title: {
            text: "Total Revenue"
        },
        colors: ["#775DD0", "#00E396"]
    };

    const Rseries = [
        {
            name: "2021",
            data: [
                { x: "Jan", y: [-15, 10] },
                { x: "Feb", y: [-5, 15] },
                { x: "Mar", y: [-10, 10] },
                { x: "Apr", y: [0, 30] },
                { x: "May", y: [-5, 15] },
                { x: "Jun", y: [5, 20] },
                { x: "Jul", y: [0, 10] }
            ]
        },
        {
            name: "2020",
            data: [
                { x: "Jan", y: [-10, 5] },
                { x: "Feb", y: [-20, 5] },
                { x: "Mar", y: [-15, 5] },
                { x: "Apr", y: [-10, 10] },
                { x: "May", y: [-10, 5] },
                { x: "Jun", y: [-15, 5] },
                { x: "Jul", y: [-5, 5] }
            ]
        }
    ];
    return (
        <>
            <div className="container-fluid container-p-y">
                <div className="row align-items-center">
                    <div className="col-12 mb-4">
                        <div className="">
                            <h2 className="m-0 d-flex align-items-center fw-bold">
                                <i className="menu-icon tf-icons bx bx-home-circle" style={{ fontSize: "30px" }}></i> Dashboard
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title mb-2" style={{ fontSize: "28px" }}>0</h2>
                                <small className="text-success fw-semibold" style={{ fontSize: "18px" }}><i className="bx bx-up-arrow-alt"></i>Unpaid Invoice</small>
                                <small className="d-block mt-1" style={{ fontSize: "18px" }}>
                                    <a href="javascript:void(0);">View More</a>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title mb-2" style={{ fontSize: "28px" }}>0</h2>
                                <small className="text-danger fw-semibold" style={{ fontSize: "18px" }}><i className="bx bx-down-arrow-alt"></i>Unpaid Amount</small>
                                <small className="d-block mt-1" style={{ fontSize: "18px" }}>
                                    <a href="javascript:void(0);">View More</a>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title mb-2" style={{ fontSize: "28px" }}>0</h2>
                                <small className="text-success fw-semibold" style={{ fontSize: "18px" }}><i className="bx bx-up-arrow-alt"></i>Income Today</small>
                                <small className="d-block mt-1" style={{ fontSize: "18px" }}>
                                    <a href="javascript:void(0);">View More</a>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title mb-2" style={{ fontSize: "28px" }}>0</h2>
                                <small className="text-danger fw-semibold" style={{ fontSize: "18px" }}><i className="bx bx-down-arrow-alt"></i>Expenses Today</small>
                                <small className="d-block mt-1" style={{ fontSize: "18px" }}>
                                    <a href="javascript:void(0);">View More</a>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title mb-2" style={{ fontSize: "28px" }}>0</h2>
                                <small className="text-success fw-semibold" style={{ fontSize: "18px" }}><i className="bx bx-up-arrow-alt"></i>Profit Today</small>
                                <small className="d-block mt-1" style={{ fontSize: "18px" }}>
                                    <a href="javascript:void(0);">View More</a>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title mb-2" style={{ fontSize: "28px" }}>0</h2>
                                <small className="text-success fw-semibold" style={{ fontSize: "18px" }}><i className="bx bx-up-arrow-alt"></i>Income This Month</small>
                                <small className="d-block mt-1" style={{ fontSize: "18px" }}>
                                    <a href="javascript:void(0);">View More</a>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title mb-2" style={{ fontSize: "28px" }}>0</h2>
                                <small className="text-success fw-semibold" style={{ fontSize: "18px" }}><i className="bx bx-up-arrow-alt"></i>Expenses This Month</small>
                                <small className="d-block mt-1" style={{ fontSize: "18px" }}>
                                    <a href="javascript:void(0);">View More</a>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title mb-2" style={{ fontSize: "28px" }}>0</h2>
                                <small className="text-success fw-semibold" style={{ fontSize: "18px" }}><i className="bx bx-up-arrow-alt"></i>Profit This Month</small>
                                <small className="d-block mt-1" style={{ fontSize: "18px" }}>
                                    <a href="javascript:void(0);">View More</a>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title mb-2" style={{ fontSize: "28px" }}>0</h2>
                                <small className="text-success fw-semibold" style={{ fontSize: "18px" }}><i className="bx bx-up-arrow-alt"></i>Income This Year</small>
                                <small className="d-block mt-1" style={{ fontSize: "18px" }}>
                                    <a href="javascript:void(0);">View More</a>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title mb-2" style={{ fontSize: "28px" }}>0</h2>
                                <small className="text-danger fw-semibold" style={{ fontSize: "18px" }}><i className="bx bx-down-arrow-alt"></i>Expenses This Year</small>
                                <small className="d-block mt-1" style={{ fontSize: "18px" }}>
                                    <a href="javascript:void(0);">View More</a>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title mb-2" style={{ fontSize: "28px" }}>0</h2>
                                <small className="text-success fw-semibold" style={{ fontSize: "18px" }}><i className="bx bx-up-arrow-alt"></i>Profit This Year</small>
                                <small className="d-block mt-1" style={{ fontSize: "18px" }}>
                                    <a href="javascript:void(0);">View More</a>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title mb-2" style={{ fontSize: "28px" }}>0</h2>
                                <small className="text-success fw-semibold" style={{ fontSize: "18px" }}><i className="bx bx-up-arrow-alt"></i>Current Session</small>
                                <small className="d-block mt-1" style={{ fontSize: "18px" }}>
                                    <a href="javascript:void(0);">View More</a>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12 col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-header">
                                <ul className="nav nav-pills" role="tablist">
                                    <li className="nav-item">
                                        <button
                                            type="button"
                                            className="nav-link active"
                                            role="tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#navs-tabs-line-card-income"
                                            aria-controls="navs-tabs-line-card-income"
                                            aria-selected="true"
                                        >
                                            Income
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="nav-link" role="tab">Expenses</button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="nav-link" role="tab">Profit</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body px-0">
                                <div className="tab-content p-0">
                                    <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                                        <div className="d-flex p-4 pt-3">
                                            <div className="avatar flex-shrink-0 me-3">
                                                <img src={wallet} alt="User" />
                                            </div>
                                            <div>
                                                <small className="text-muted d-block">Total Balance</small>
                                                <div className="d-flex align-items-center">
                                                    <h6 className="mb-0 me-1">$459.10</h6>
                                                    <small className="text-success fw-semibold">
                                                        <i className="bx bx-chevron-up"></i>
                                                        42.9%
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="incomeChart">
                                            <ReactApexChart options={options} series={series} type="area" height={350} />
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center   ">
                                            <div className="flex-shrink-0">
                                                <div id="expensesOfWeek" >
                                                    <ReactApexChart options={pieOptions} series={[pieSeries]} type="radialBar" height={130} width={130} />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="mb-n1 mt-0 ">Expenses This Week</p>
                                                <small className="text-muted">$39 less than last week</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-header d-flex align-items-center justify-content-between pb-0">
                                <div className="card-title mb-0">
                                    <h5 className="m-0 me-2">Latest Admissions</h5>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-sm-6">
                                        <div className="mt-4 bg-white shadow p-2 text-center rounded">
                                            <img src={avatar5} alt="" className="img-thumbnail rounded-pill mb-2 mx-auto" style={{ maxHeight: "70px" }} />
                                            <h6 className="mb-0">Name</h6>
                                            <p className="mb-0 ">className 8th</p>
                                            <small>28 Fab 2024</small>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mt-4 bg-white shadow p-2 text-center rounded">
                                            <img src={avatar6} alt="" className="img-thumbnail rounded-pill mb-2 mx-auto" style={{ maxHeight: "70px" }} />
                                            <h6 className="mb-0">Name</h6>
                                            <p className="mb-0 ">className 8th</p>
                                            <small>28 Fab 2024</small>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mt-4 bg-white shadow p-2 text-center rounded">
                                            <img src={avatar1} alt="" className="img-thumbnail rounded-pill mb-2 mx-auto" style={{ maxHeight: "70px" }} />
                                            <h6 className="mb-0">Name</h6>
                                            <p className="mb-0 ">className 8th</p>
                                            <small>28 Fab 2024</small>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mt-4 bg-white shadow p-2 text-center rounded">
                                            <img src={avatar7} alt="" className="img-thumbnail rounded-pill mb-2 mx-auto" style={{ maxHeight: "70px" }} />
                                            <h6 className="mb-0">Name</h6>
                                            <p className="mb-0 ">className 8th</p>
                                            <small>28 Fab 2024</small>
                                        </div>
                                    </div>
                                </div>
                                <small>Total Admission This Month So For : 15</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-header d-flex align-items-center justify-content-between pb-0">
                                <div className="card-title mb-0">
                                    <h5 className="m-0 me-2">Staff Attendance Overview</h5>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-6">
                                        <div className="mt-4 bg-primary p-3 text-center rounded">
                                            <h2 className="text-white">0</h2>
                                            <p className="mb-0 text-white">Total Present Today</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-4 bg-danger p-3 text-center rounded">
                                            <h2 className="text-white">0</h2>
                                            <p className="mb-0 text-white">Total Absence Today</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-4 bg-warning p-3 text-center rounded">
                                            <h2 className="text-white">0</h2>
                                            <p className="mb-0 text-white">Total Late Arrival Today</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-4 bg-info p-3 text-center rounded">
                                            <h2 className="text-white">0</h2>
                                            <p className="mb-0 text-white">Total On Leave Today</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-lg-7 mb-4">
                        <div className="card">
                            <div className="row row-bordered g-0">
                                <div className="col-md-8">
                                    <h5 className="card-header m-0 me-2 pb-3">Total Revenue</h5>
                                    <div id="totalRevenueChart" className="px-2">
                                        <ReactApexChart options={Roptions} series={Rseries} type="rangeBar" height={350} />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-sm btn-outline-primary dropdown-toggle"
                                                    type="button"
                                                    id="growthReportId"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    2022
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="growthReportId">
                                                    <a className="dropdown-item" href="javascript:void(0);">2021</a>
                                                    <a className="dropdown-item" href="javascript:void(0);">2020</a>
                                                    <a className="dropdown-item" href="javascript:void(0);">2019</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="growthChart">
                                        <ReactApexChart options={optionsRadialGuage.options} series={optionsRadialGuage.series} type="radialBar" height={400} />
                                    </div>

                                    <div className="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between">
                                        <div className="d-flex">
                                            <div className="me-2">
                                                <span className="badge bg-label-primary p-2"><i className="bx bx-dollar text-primary"></i></span>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <small>2022</small>
                                                <h6 className="mb-0">$0</h6>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="me-2">
                                                <span className="badge bg-label-info p-2"><i className="bx bx-wallet text-info"></i></span>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <small>2021</small>
                                                <h6 className="mb-0">$0</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-5 mb-4">
                        <div className="card">
                            <div className="card-header d-flex align-items-center justify-content-between pb-0">
                                <div className="card-title mb-3">
                                    <h5 className="m-0 me-2">Today Overview</h5>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="p-0 m-0">
                                    <li className="d-flex mb-4 pb-1">
                                        <div className="avatar flex-shrink-0 me-3">
                                            <span className="avatar-initial rounded bg-label-primary"><i className="bx bx-mobile-alt"></i></span>
                                        </div>
                                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                            <div className="me-2">
                                                <h6 className="mb-0">Total Student</h6>
                                                <small className="text-muted">0</small>
                                            </div>
                                            <div className="user-progress">
                                                <small className="fw-semibold me-1">0 Boys</small>
                                                <small className="fw-semibold">0 Girls</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 pb-1">
                                        <div className="avatar flex-shrink-0 me-3">
                                            <span className="avatar-initial rounded bg-label-primary"><i className="bx bx-mobile-alt"></i></span>
                                        </div>
                                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                            <div className="me-2">
                                                <h6 className="mb-0">Parents</h6>
                                                <small className="text-muted">0</small>
                                            </div>
                                            <div className="user-progress">
                                                <small className="fw-semibold me-1">Total Registered Parents</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 pb-1">
                                        <div className="avatar flex-shrink-0 me-3">
                                            <span className="avatar-initial rounded bg-label-primary"><i className="bx bx-mobile-alt"></i></span>
                                        </div>
                                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                            <div className="me-2">
                                                <h6 className="mb-0">Total Staff</h6>
                                                <small className="text-muted">0</small>
                                            </div>
                                            <div className="user-progress">
                                                <small className="fw-semibold me-1">0 Male</small>
                                                <small className="fw-semibold">0 Female</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 pb-1">
                                        <div className="avatar flex-shrink-0 me-3">
                                            <span className="avatar-initial rounded bg-label-primary"><i className="bx bx-mobile-alt"></i></span>
                                        </div>
                                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                            <div className="me-2">
                                                <h6 className="mb-0">Present Student Today</h6>
                                                <small className="text-muted">0</small>
                                            </div>
                                            <div className="user-progress">
                                                <small className="fw-semibold me-1">Absence Percentage: 0%</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <h5 className="card-header">Class Record</h5>
                            <div className="table-responsive text-nowrap">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Class Name</th>
                                            <th>Section Student</th>
                                            <th>Present Today</th>
                                            <th>Absents Today</th>
                                            <th>On Leave</th>
                                            <th>Expected</th>
                                            <th>Generated</th>
                                            <th>Paid Amount</th>
                                            <th>Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">
                                        {classData.map((record, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <i className="menu-icon tf-icons bx bxs-school"></i>
                                                    <strong>{record.className}</strong>
                                                </td>
                                                <td>
                                                    {record.sections.map((section, idx) => (
                                                        <span key={idx} className="badge bg-label-primary mx-1">
                                                            <i className="menu-icon tf-icons bx bx-user"></i>
                                                            {section}
                                                        </span>
                                                    ))}
                                                </td>
                                                <td>
                                                    <span className="badge bg-label-success">
                                                        <i className="menu-icon tf-icons bx bx-check"></i>
                                                        {record.present}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-label-danger">
                                                        <i className="menu-icon tf-icons bx bx-x"></i>
                                                        {record.absent}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-label-info">
                                                        <i className="menu-icon tf-icons bx bx-book-reader"></i>
                                                        {record.onLeave}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-label-warning">
                                                        <i className="menu-icon tf-icons bx bx-book-reader"></i>
                                                        {record.expected}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-label-success">
                                                        <i className="menu-icon tf-icons bx bx-book-reader"></i>
                                                        {record.generated}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-label-success">
                                                        <i className="menu-icon tf-icons bx bx-book-reader"></i>
                                                        {record.paid}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-label-success">
                                                        <i className="menu-icon tf-icons bx bx-book-reader"></i>
                                                        {record.balance}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
export default Graph;
