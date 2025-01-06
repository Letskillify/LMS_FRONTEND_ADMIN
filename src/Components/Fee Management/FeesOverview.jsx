import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FeesOverview = () => {
    const feeData = [
        { class: "Class 6", collectedFees: 15000, pendingFees: 2000 },
        { class: "Class 7", collectedFees: 22000, pendingFees: 3000 },
        { class: "Class 8", collectedFees: 18000, pendingFees: 5000 },
        { class: "Class 9", collectedFees: 24000, pendingFees: 4000 },
        { class: "Class 10", collectedFees: 21000, pendingFees: 6000 },
    ];

    // Extracting arrays for labels and datasets
    const labels = feeData.map((item) => item.class);
    const collectedFees = feeData.map((item) => item.collectedFees);
    const pendingFees = feeData.map((item) => item.pendingFees);

    // Data for the chart
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Collected Fees",
                data: collectedFees,
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
            {
                label: "Pending Fees",
                data: pendingFees,
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Fee Collection Overview by Class",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => `₹${value}`,
                },
            },
        },
    };

    // Define topCards array for dashboard cards
    const topCards = [
        {
            title: "Total Collection",
            value: "₹77,000",
            icon: "fa-indian-rupee-sign",
            change: "↑ 12%",
            trend: "text-success",
            description: "from last month",
        },
        {
            title: "Total Students",
            value: "500",
            icon: "fa-users",
            change: "↑ 8%",
            trend: "text-success",
            description: "from last month",
        },
        {
            title: "Pending Fees",
            value: "₹15,000",
            icon: "fa-clock",
            change: "↓ 5%",
            trend: "text-danger",
            description: "from last month",
        },
        {
            title: "Defaulters",
            value: "50",
            icon: "fa-circle-exclamation",
            change: "↓ 3%",
            trend: "text-danger",
            description: "from last month",
        },
    ];


    return (
        <div className="page-wrapper">

            <div className="container bg-light" >
                <div className="heading my-4 ms-3">
                    <h1>Dashboard</h1>

                </div>
                <div className="row mb-0">
                    {topCards.map((card, index) => (
                        <div className="col-md-3 col-sm-6 mb-3" key={index}>
                            <div className="card p-3 shadow-sm">
                                <div className="d-flex justify-content-between align-items-center ">
                                    <h6 className="text-muted mb-0">{card.title}</h6>
                                    <div
                                        className="d-flex justify-content-center align-items-center rounded-circle bg-light  "
                                        style={{ width: "50px", height: "50px" }}
                                    >
                                        <i className={`fa-solid ${card.icon} text-primary`} style={{ fontSize: "1.5rem" }}></i>
                                    </div>
                                </div>
                                <h1 className={`fw-bold mb-3`}>{card.value}</h1>
                                <small className={`${card.trend}`}>
                                    {card.change} <span className="text-muted">{card.description}</span>
                                </small>
                            </div>
                        </div>
                    ))}
                </div>



                <div className=" mx-auto">
                    <div className="card p-4 shadow-sm">
                        {/* <h3 className="text-center mb-4">Class-wise Fee Collection Chart</h3> */}
                        <Bar data={data} options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeesOverview;
