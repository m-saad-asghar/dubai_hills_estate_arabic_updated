'use client'
import Link from "next/link"
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift, FaKey, FaUsers, FaBriefcase, FaPassport, FaCity, FaStar } from "react-icons/fa";

export default function Pricing() {
    
    return (
        <>
            {/*Start Service One */}
        <section className="service-one" id="why-invest-in-dubai" dir="rtl">
            {/* <div className="service-one__shape2" style={{backgroundImage: 'url(assets/img/shape/service-v1-shape2.png)'}}>
            </div> */}
            <div className="container">
                <div className="sec-title">
                    <h2>لماذا الاستثمار في دبي؟</h2>
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
                                    <h2 style={{color: "#ffffff"}}>عوائد إيجارية عالية</h2>
                                    <p>نسبة ربح تصل إلى 5–9% سنويا.</p>
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
                                    <h2 style={{color: "#ffffff"}}>عقارات فاخرة بتكلفة أقل</h2>
                                    <p>فخامة بأسعار تنافسية.</p>
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
                                    <h2 style={{color: "#ffffff"}}>ملكية معفاة من الضرائب</h2>
                                    <p> لا توجد أي ضرائب على العقار.</p>
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
                                    <h2 style={{color: "#ffffff"}}>سهولة الوصول عالمياً</h2>
                                    <p>وصول مباشر إلى أبرز المدن العالمية.</p>
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
                                        <FaPlane className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>السياحة وأسلوب الحياة</h2>
                                    <p>الشواطئ، المولات، المعالم السياحية والفنادق.</p>
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
                                        <FaUsers className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>آمنة ومناسبة للعائلات</h2>
                                    <p>إحدى أكثر المدن أماناً في العالم.</p>
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
                                        <FaBriefcase className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>مركز للأعمال والتجارة</h2>
                                    <p>جاذب للمستثمرين العالميين.</p>
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
                                        <FaPassport className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>الإقامة الذهبية</h2>
                                    <p>تأشيرات ذهبية وخضراء للمستثمرين.</p>
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
                                        <FaCity className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>مدينة جاهزة للمستقبل</h2>
                                    <p>التركيز على الابتكار في التكنولوجيا، الطاقة المستدامة، الرعاية الصحية والتعليم.</p>
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
                                        <FaStar className="icon-plane" size={50}/> 
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 style={{color: "#ffffff"}}>مكافآت حصرية من إعمار</h2>
                                    <p>مزايا بلاتينية وذهبية للمستثمرين المميزين.</p>
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
                                    <span className="txt">سجل اهتمامك</span>
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
