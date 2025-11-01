import Link from "next/link"
export default function Future() {
    return (
        <>
            {/*Start About One */}
            <section id="future-of-waterfront" dir="rtl">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container future_container">
                    <div className="row">
                        <div className="col-xl-12 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content" style={{marginLeft: 0}}>
                                <div className="sec-title">
                                    {/* <div className="sub-title">
                                        <h5>About Company</h5>
                                    </div> */}
                                    <h2>مستقبل العيش على الواجهة المائية</h2>
                                </div>

                                <div className="text-box">
                                    <p>اكتشف الانسجام المثالي بين الهدوء، والعافية، والأناقة في دبي كريك هاربور. تجمع هذه المجتمع الحيوي بين الحياة الهادئة على الواجهة المائية مع ممشى نابض بالحياة، ومرافق للعافية، وإطلالات خلابة على المارينا وأفق دبي.</p><br/>
                                    <p>استمتع بيوغا عند شروق الشمس بجانب الماء، أو تناول الطعام في الهواء الطلق، أو تمشٍّ هادئ على طول الخور الخلاب. استرخِ بجانب مسبح إنفينيتي يطل على برج خليفة، أو استكشف الحي بركوب الدراجة في مناظر طبيعية رائعة.</p><br/>
                                    <p>سواء للسكن أو الاستثمار، يقدم دبي كريك هاربور قيمة استثنائية من خلال مجموعته من الشقق المكونة من 1–3 غرف نوم، والمنازل العائلية، والبنتهاوس الفاخر — جميعها مصممة بأناقة عصرية وتصاميم عالمية المستوى.</p>
                                </div>

                                {/* <div className="about-one__content-progress">
                                    ...
                                </div> */}

                                <div className="about-one__content-bottom future_btn" style={{display: "flex", justifyContent: "center"}}>
                                    <div className="about-one__content-bottom-author-box">
                                       <div className="btn-box">
                            <div className="btn-one">
                                <Link className="thm-btn" href="#contact-form">
                                    <span className="txt">تسجيل الاهتمام</span>
                                </Link>
                            </div>
                        </div>

                                        {/* <div className="author-info">
                                            ...
                                        </div> */}
                                    </div>
                                    {/* <div className="text">
                                        ...
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/*End About One Content */}
                    </div>
                </div>
            </section>
            {/*End About One */}
        </>
    )
}
