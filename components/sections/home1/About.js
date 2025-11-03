import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
export default function About() {
    return (
        <>
            {/*Start About One */}
            <section className="about-one" id="welcome-to-dubai" dir="rtl">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container">
                    <div className="row">
                        {/*Start About One Img */}
                        <div className="col-xl-5 wow animated fadeInRight full_height" data-wow-delay="0.1s">
                            <div className="about-one__img" style={{height: 500}}>
                                <div className="inner full_height">
                                    <img src="assets/img/gallery/about_img.jpg" alt="مرحبًا بكم في دبي كريك هاربور" className="full_height"/>
                                </div>
                            </div>
                        </div>
                        {/*End About One Img */}

                        {/*Start About One Content */}
                        <div className="col-xl-7 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content">
                                <div className="sec-title">
                                    {/* <div className="sub-title">
                                        <h5>About Company</h5>
                                    </div> */}
                                    <h2>مرحباً بكم في خور دبي</h2>
                                </div>

                                <div className="text-box">

                                    <p>
    موطناً لمعالم أيقونية مثل مرسى خور دبي ومحمية رأس الخور للحياة البرية، يجمع خور دبي بين الأناقة الحضرية وجمال الطبيعة في تناغم فريد. تجوّل على طول البحيرات الهادئة، واستمتع بتجربة تناول الطعام على الواجهة المائية، وتأمل الإطلالات البانورامية الخلابة لأفق دبي.
</p><br/>

<p>
    بفضل موقعه الاستراتيجي واتصاله المثالي بـ وسط مدينة دبي ومطار دبي الدولي ومشروع توسعة المترو القادم، يقدم خور دبي أسلوب حياة استثنائي يجمع بين الراحة والرقي.
</p><br/>

<p>
    اكتشف مجموعة من الشقق الأنيقة والبنتهاوس والفنادق الفاخرة مثل فندق فيدا كريك هاربر، وفندق العنوان هاربر بوينت، وقصر رزيدنس  — جميعها توفر مرافق عالمية المستوى وتجارب راقية في التسوق والترفيه ضمن وجهة واجهة مائية نابضة بالحياة.
</p><br/>
                                </div>

                                {/* <div className="about-one__content-progress">
                                    ...
                                </div> */}
                            </div>
                        </div>

                         <div className="about-one__content-bottom centerize" style={{display: "flex", justifyContent: "center"}}>
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
                        {/*End About One Content */}
                    </div>
                </div>
            </section>
            {/*End About One */}
        </>
    )
}
