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
                                    <h2>مستقبل الحياة على الواجهة المائية</h2>
                                </div>

                                <div className="text-box">
                                    <p>
اكتشف التناغم المثالي بين السكينة والعافية والرقي في خور دبي. حيث يجمع هذا المجتمع النابض بالحياة بين هدوء الإطلالات المائية وحيوية المنتزهات والممرات والمرافق الصحية والمشاهد الخلابة للمارينا وأفق دبي.
</p><br/>

<p>
استمتع بتمارين اليوغا عند شروق الشمس على ضفاف المياه، أو بتجارب تناول الطعام في الهواء الطلق، أو بنزهة هادئة على طول الخور الساحر. كما يمكنك الاسترخاء بجانب حوض سباحة لامتناهي يطل على برج خليفة، أو استكشاف الحي في جولة بالدراجة الهوائية.
</p><br/>

<p>
سواء كنت تبحث عن منزل الأحلام أو فرصة استثمارية واعدة، يقدم خور دبي قيمة استثنائية مع مجموعته من الشقق الفاخرة المكونة من غرفة إلى ثلاث غرف نوم، والمنازل العائلية، والبنتهاوس الفاخرة — جميعها مصممة بأناقة عصرية وجودة عالمية.
</p>
                                </div>

                                {/* <div className="about-one__content-progress">
                                    ...
                                </div> */}

                                <div className="about-one__content-bottom future_btn" style={{display: "flex", justifyContent: "center"}}>
                                    <div className="about-one__content-bottom-author-box">
                                       <div className="btn-box">
                            <div className="btn-one">
                                <Link className="thm-btn" href="#contact-form">
                                    <span className="txt">سجل اهتمامك</span>
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
