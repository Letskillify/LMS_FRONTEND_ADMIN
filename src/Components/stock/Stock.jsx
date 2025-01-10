import React, { useState } from 'react'

function Stock() {

    const [paymentMode, setPaymentMode] = useState('');
    return (
        <>

            {/* <!-- Stock Account Buttons --> */}
            <h2 className='text-center mt-4'>Stock Account</h2>
            <div class="stockAccount text-center mt-3">
                <button className='btn btn-info m-2'>Create</button>
                <button className='btn btn-warning m-2'>Edit / Delete</button>
                <button className='btn btn-secondary m-2'>Display</button>
            </div>
            <div class="container mt-5">
                <form>
                    <div class="card shadow-lg p-4 rounded">
                        <div class="card-header d-flex justify-content-between align-items-center mb-5">
                            <h2 class="text-dark">Account Management</h2>
                        </div>

                        <div class="card-body">
                            <div class="row">
                                {/* <!-- Personal Info Section --> */}
                                <div class="col-md-6">
                                    <h4>Personal Info</h4>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">Name:</label>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">Alias:</label>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" placeholder="Enter Alias" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">Adhar No:</label>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" placeholder="Enter Telephone" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">State:</label>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" placeholder="Enter State" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">Country:</label>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" placeholder="Enter Country" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">City:</label>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" placeholder="Enter City" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">Address:</label>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" placeholder="Enter Address" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">Phone:</label>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" placeholder="Enter Phone" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">Email:</label>
                                        <div class="col-md-8">
                                            <input type="email" class="form-control" placeholder="Enter Email" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">Telephone:</label>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" placeholder="Enter Telephone" />
                                        </div>
                                    </div>

                                </div>

                                {/* <!-- Firm Info Section --> */}
                                <div class="col-md-6">
                                    <h4>Firm Info</h4>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">Company Name:</label>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" placeholder="Enter Company Name" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">Company Category:</label>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" placeholder="Enter Category" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">Currency Type</label>
                                        <div class="col-md-8">
                                            <select class="form-control">
                                                <option value="">Select Currency</option>
                                                <option value="AED">AED - United Arab Emirates Dirham</option>
                                                <option value="AFN">AFN - Afghan Afghani</option>
                                                <option value="ALL">ALL - Albanian Lek</option>
                                                <option value="AMD">AMD - Armenian Dram</option>
                                                <option value="ANG">ANG - Netherlands Antillean Guilder</option>
                                                <option value="AOA">AOA - Angolan Kwanza</option>
                                                <option value="ARS">ARS - Argentine Peso</option>
                                                <option value="AUD">AUD - Australian Dollar</option>
                                                <option value="AWG">AWG - Aruban Florin</option>
                                                <option value="AZN">AZN - Azerbaijani Manat</option>
                                                <option value="BAM">BAM - Bosnia-Herzegovina Convertible Mark</option>
                                                <option value="BBD">BBD - Barbadian Dollar</option>
                                                <option value="BDT">BDT - Bangladeshi Taka</option>
                                                <option value="BGN">BGN - Bulgarian Lev</option>
                                                <option value="BHD">BHD - Bahraini Dinar</option>
                                                <option value="BIF">BIF - Burundian Franc</option>
                                                <option value="BMD">BMD - Bermudian Dollar</option>
                                                <option value="BND">BND - Brunei Dollar</option>
                                                <option value="BOB">BOB - Bolivian Boliviano</option>
                                                <option value="BRL">BRL - Brazilian Real</option>
                                                <option value="BSD">BSD - Bahamian Dollar</option>
                                                <option value="BTN">BTN - Bhutanese Ngultrum</option>
                                                <option value="BWP">BWP - Botswanan Pula</option>
                                                <option value="BYN">BYN - Belarusian Ruble</option>
                                                <option value="BZD">BZD - Belize Dollar</option>
                                                <option value="CAD">CAD - Canadian Dollar</option>
                                                <option value="CDF">CDF - Congolese Franc</option>
                                                <option value="CHF">CHF - Swiss Franc</option>
                                                <option value="CLP">CLP - Chilean Peso</option>
                                                <option value="CNY">CNY - Chinese Yuan</option>
                                                <option value="COP">COP - Colombian Peso</option>
                                                <option value="CRC">CRC - Costa Rican Colón</option>
                                                <option value="CUP">CUP - Cuban Peso</option>
                                                <option value="CVE">CVE - Cape Verdean Escudo</option>
                                                <option value="CZK">CZK - Czech Republic Koruna</option>
                                                <option value="DJF">DJF - Djiboutian Franc</option>
                                                <option value="DKK">DKK - Danish Krone</option>
                                                <option value="DOP">DOP - Dominican Peso</option>
                                                <option value="DZD">DZD - Algerian Dinar</option>
                                                <option value="EGP">EGP - Egyptian Pound</option>
                                                <option value="ERN">ERN - Eritrean Nakfa</option>
                                                <option value="ETB">ETB - Ethiopian Birr</option>
                                                <option value="EUR">EUR - Euro</option>
                                                <option value="FJD">FJD - Fijian Dollar</option>
                                                <option value="FKP">FKP - Falkland Islands Pound</option>
                                                <option value="FOK">FOK - Faroese Króna</option>
                                                <option value="GBP">GBP - British Pound Sterling</option>
                                                <option value="GEL">GEL - Georgian Lari</option>
                                                <option value="GHS">GHS - Ghanaian Cedi</option>
                                                <option value="GIP">GIP - Gibraltar Pound</option>
                                                <option value="GMD">GMD - Gambian Dalasi</option>
                                                <option value="GNF">GNF - Guinean Franc</option>
                                                <option value="GTQ">GTQ - Guatemalan Quetzal</option>
                                                <option value="GYD">GYD - Guyanaese Dollar</option>
                                                <option value="HKD">HKD - Hong Kong Dollar</option>
                                                <option value="HNL">HNL - Honduran Lempira</option>
                                                <option value="HRK">HRK - Croatian Kuna</option>
                                                <option value="HTG">HTG - Haitian Gourde</option>
                                                <option value="HUF">HUF - Hungarian Forint</option>
                                                <option value="IDR">IDR - Indonesian Rupiah</option>
                                                <option value="ILS">ILS - Israeli New Sheqel</option>
                                                <option value="INR">INR - Indian Rupee</option>
                                                <option value="IQD">IQD - Iraqi Dinar</option>
                                                <option value="IRR">IRR - Iranian Rial</option>
                                                <option value="ISK">ISK - Icelandic Króna</option>
                                                <option value="JMD">JMD - Jamaican Dollar</option>
                                                <option value="JOD">JOD - Jordanian Dinar</option>
                                                <option value="JPY">JPY - Japanese Yen</option>
                                                <option value="KES">KES - Kenyan Shilling</option>
                                                <option value="KGS">KGS - Kyrgystani Som</option>
                                                <option value="KHR">KHR - Cambodian Riel</option>
                                                <option value="KMF">KMF - Comorian Franc</option>
                                                <option value="KRW">KRW - South Korean Won</option>
                                                <option value="KWD">KWD - Kuwaiti Dinar</option>
                                                <option value="KYD">KYD - Cayman Islands Dollar</option>
                                                <option value="KZT">KZT - Kazakhstani Tenge</option>
                                                <option value="LAK">LAK - Laotian Kip</option>
                                                <option value="LBP">LBP - Lebanese Pound</option>
                                                <option value="LKR">LKR - Sri Lankan Rupee</option>
                                                <option value="LRD">LRD - Liberian Dollar</option>
                                                <option value="LSL">LSL - Lesotho Loti</option>
                                                <option value="LYD">LYD - Libyan Dinar</option>
                                                <option value="MAD">MAD - Moroccan Dirham</option>
                                                <option value="MDL">MDL - Moldovan Leu</option>
                                                <option value="MGA">MGA - Malagasy Ariary</option>
                                                <option value="MKD">MKD - Macedonian Denar</option>
                                                <option value="MMK">MMK - Myanmar Kyat</option>
                                                <option value="MNT">MNT - Mongolian Tugrik</option>
                                                <option value="MOP">MOP - Macanese Pataca</option>
                                                <option value="MRU">MRU - Mauritanian Ouguiya</option>
                                                <option value="MUR">MUR - Mauritian Rupee</option>
                                                <option value="MVR">MVR - Maldivian Rufiyaa</option>
                                                <option value="MWK">MWK - Malawian Kwacha</option>
                                                <option value="MXN">MXN - Mexican Peso</option>
                                                <option value="MYR">MYR - Malaysian Ringgit</option>
                                                <option value="MZN">MZN - Mozambican Metical</option>
                                                <option value="NAD">NAD - Namibian Dollar</option>
                                                <option value="NGN">NGN - Nigerian Naira</option>
                                                <option value="NIO">NIO - Nicaraguan Córdoba</option>
                                                <option value="NOK">NOK - Norwegian Krone</option>
                                                <option value="NPR">NPR - Nepalese Rupee</option>
                                                <option value="NZD">NZD - New Zealand Dollar</option>
                                                <option value="OMR">OMR - Omani Rial</option>
                                                <option value="PAB">PAB - Panamanian Balboa</option>
                                                <option value="PEN">PEN - Peruvian Sol</option>
                                                <option value="PGK">PGK - Papua New Guinean Kina</option>
                                                <option value="PHP">PHP - Philippine Peso</option>
                                                <option value="PKR">PKR - Pakistani Rupee</option>
                                                <option value="PLN">PLN - Polish Zloty</option>
                                                <option value="PYG">PYG - Paraguayan Guarani</option>
                                                <option value="QAR">QAR - Qatari Rial</option>
                                                <option value="RON">RON - Romanian Leu</option>
                                                <option value="RSD">RSD - Serbian Dinar</option>
                                                <option value="RUB">RUB - Russian Ruble</option>
                                                <option value="RWF">RWF - Rwandan Franc</option>
                                                <option value="SAR">SAR - Saudi Riyal</option>
                                                <option value="SBD">SBD - Solomon Islands Dollar</option>
                                                <option value="SCR">SCR - Seychellois Rupee</option>
                                                <option value="SDG">SDG - Sudanese Pound</option>
                                                <option value="SEK">SEK - Swedish Krona</option>
                                                <option value="SGD">SGD - Singapore Dollar</option>
                                                <option value="SHP">SHP - Saint Helena Pound</option>
                                                <option value="SLL">SLL - Sierra Leonean Leone</option>
                                                <option value="SOS">SOS - Somali Shilling</option>
                                                <option value="SRD">SRD - Surinamese Dollar</option>
                                                <option value="SSP">SSP - South Sudanese Pound</option>
                                                <option value="STN">STN - São Tomé and Príncipe Dobra</option>
                                                <option value="SYP">SYP - Syrian Pound</option>
                                                <option value="SZL">SZL - Swazi Lilangeni</option>
                                                <option value="THB">THB - Thai Baht</option>
                                                <option value="TJS">TJS - Tajikistani Somoni</option>
                                                <option value="TMT">TMT - Turkmenistani Manat</option>
                                                <option value="TND">TND - Tunisian Dinar</option>
                                                <option value="TOP">TOP - Tongan Paʻanga</option>
                                                <option value="TRY">TRY - Turkish Lira</option>
                                                <option value="TTD">TTD - Trinidad and Tobago Dollar</option>
                                                <option value="TVD">TVD - Tuvaluan Dollar</option>
                                                <option value="TWD">TWD - New Taiwan Dollar</option>
                                                <option value="TZS">TZS - Tanzanian Shilling</option>
                                                <option value="UAH">UAH - Ukrainian Hryvnia</option>
                                                <option value="UGX">UGX - Ugandan Shilling</option>
                                                <option value="USD">USD - United States Dollar</option>
                                                <option value="UYU">UYU - Uruguayan Peso</option>
                                                <option value="UZS">UZS - Uzbekistani Som</option>
                                                <option value="VES">VES - Venezuelan Bolívar Soberano</option>
                                                <option value="VND">VND - Vietnamese Dong</option>
                                                <option value="VUV">VUV - Vanuatu Vatu</option>
                                                <option value="WST">WST - Samoan Tala</option>
                                                <option value="XAF">XAF - Central African CFA Franc</option>
                                                <option value="XCD">XCD - East Caribbean Dollar</option>
                                                <option value="XOF">XOF - West African CFA Franc</option>
                                                <option value="XPF">XPF - CFP Franc</option>
                                                <option value="YER">YER - Yemeni Rial</option>
                                                <option value="ZAR">ZAR - South African Rand</option>
                                                <option value="ZMW">ZMW - Zambian Kwacha</option>
                                                <option value="ZWL">ZWL - Zimbabwean Dollar</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">GST Type</label>
                                        <div class="col-md-8">
                                            <select class="form-control">
                                                <option value="">Select GST Type</option>
                                                <option value="regular">Regular</option>
                                                <option value="composition">Composition</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">GST No:</label>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" placeholder="Enter GSTN" />
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">GST %:</label>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" placeholder="Enter GST %" />
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">PAN:</label>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" placeholder="Enter PAN" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-md-4 col-form-label">Buussions Type:</label>
                                        <div class="col-md-8">
                                            <select class="form-control">
                                                <option value="">Select</option>
                                                <option value="Buyer">Buyer</option>
                                                <option value="Seller">Seller</option>
                                                <option value="Seller">Both</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="row mb-3">
                                            <label className="col-md-4 col-form-label">Bank Account:</label>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" placeholder="Enter Bank Account" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-md-4 col-form-label">IFSC No:</label>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" placeholder="Enter IFSC No" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-md-4 col-form-label">Bank Holder Name:</label>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" placeholder="Enter Bank Holder Name" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-md-4 col-form-label">Bank Name:</label>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" placeholder="Enter Bank Name" />
                                            </div>
                                        </div>
                                        <div />
                                    </div>
                                    {/* <div>
                                        <div>
                                           
                                            <div className="row mb-3">
                                                <label className="col-md-4 col-form-label">Payment Mode:</label>
                                                <div className="col-md-8">
                                                    <select
                                                        className="form-control"
                                                        value={paymentMode}
                                                        onChange={(e) => setPaymentMode(e.target.value)}
                                                    >
                                                        <option value="">Select Your Type</option>
                                                        <option value="mobile">Mobile Payment</option>
                                                        <option value="cash">Cash Payment</option>
                                                        <option value="check">Check Payment</option>
                                                        <option value="bank">Bank Transfer</option>
                                                    </select>
                                                </div>
                                            </div>


                                            {paymentMode === 'bank' && (
                                                <div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">Bank Account:</label>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" placeholder="Enter Bank Account" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">IFSC No:</label>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" placeholder="Enter IFSC No" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">Bank Holder Name:</label>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" placeholder="Enter Bank Holder Name" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">Bank Name:</label>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" placeholder="Enter Bank Name" />
                                                        </div>
                                                    </div>
                                                    <div />
                                                </div>
                                            )}

                                            {paymentMode === 'mobile' && (
                                                <div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">Upi No :</label>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" placeholder="Enter Bank Account" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">UPI ID :</label>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" placeholder="Enter Bank Account" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {paymentMode === 'check' && (
                                                <div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">Check NO : </label>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" placeholder="Enter Bank Account" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">Check Date</label>
                                                        <div className="col-md-8">
                                                            <input type="date" className="form-control" placeholder="Enter Bank Account" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            
                                        </div>
                                    </div> */}

                                    {/* <!-- Buttons --> */}
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 text-center">
                            <button type="button" class="btn btn-secondary me-2">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>

            </div>

        </>
    )
}

export default Stock