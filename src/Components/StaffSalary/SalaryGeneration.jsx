import React from 'react'

const SalaryGeneration = () => {

    return (
        <>
            <div className="container-fluid container-p-y">
                <h4 className="fw-bold py-3"><span className="text-muted fw-light">Dashboard /</span> Salary Generation</h4>
                <div className='ps-2 py-2 border rounded' style={{ color: '#fff', backgroundColor: '#013473', fontSize: '19px' }}>
                    <i className="fa fa-arrow-circle-o-right me-2" aria-hidden="true"></i>Salary Generation
                </div>
                <div className="bg-white pb-4 mx-2">
                    <form action="">
                        <div className="row mx-auto w-75 py-3">
                            <div className="col-6 ps-4">
                                <label className='mb-2 font-weight-bold' htmlFor="">Label</label>
                                <select className='w-75 form-select' name="" id="">
                                    <option value="">Main Campus</option>
                                    <option value="">Outer Campus</option>
                                </select>
                            </div>
                            <div className="col-6 ps-4">
                                <label className='mb-2 font-weight-bold' htmlFor="">Month</label>
                                <select className='w-75 form-select' name="" id="">
                                    <option value="">Nov.</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mx-auto w-75 py-3">
                            <div className="col-6 ps-4">
                                <label className='mb-2 font-weight-bold' htmlFor="">Year</label>
                                <select className='w-75 form-select' name="" id="">
                                    <option value="">2024</option>
                                </select>
                            </div>
                            <div className="col-6 ps-4">
                                <label className='mb-2 font-weight-bold' htmlFor="">Deducation Per Late Arrival</label>
                                <input type="tel" className='w-75 form-control' name="" id="" value={0} />
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <button className='btn btn-primary'>Generate Salary <i className='fa fa-thumbs-up'></i></button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default SalaryGeneration
