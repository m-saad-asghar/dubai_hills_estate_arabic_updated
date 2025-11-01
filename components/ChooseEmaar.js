'use client'
import Link from "next/link"
import { useState } from "react"
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift, FaKey, FaUsers, FaBriefcase, FaPassport, FaCity, FaStar } from "react-icons/fa";

export default function ChooseEmaar() {
    
    return (
        <>
            {/*Start Service One */}
        <section className="service-one extra_spacing" id="emaar-at-a-glance" dir="rtl">
            {/* <div className="service-one__shape2" style={{backgroundImage: 'url(assets/img/shape/service-v1-shape2.png)'}}>
            </div> */}
            <div className="container">
                <div className="sec-title">
                    <h2>نظرة سريعة على إعمار</h2>
                </div>
                <div className="row">
                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaChartLine className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>116,500+</h2>
                                    <p>الوحدات المسلمة حتى يوليو 2024.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaHouseUser className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>30,000+</h2>
                                    <p>منازل قيد التطوير حالياً في الإمارات.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaKey className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>56%</h2>
                                   <p>نمو في مبيعات العقارات في النصف الأول من 2024.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
                                        <FaGlobe className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>12+</h2>
                                    <p>دول — حضور عالمي حقيقي.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}
                </div>
                <div className="about-one__content-bottom" style={{display: "flex", justifyContent: "center"}}>
                    <div className="about-one__content-bottom-author-box">
                        <div className="btn-box">
                            <div className="btn-one">
                                <Link className="thm-btn" href="#contact-form">
                                    <span className="txt">تسجيل الاهتمام</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End Service One */}
        </>
    )
}
