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
                                    <h2>مرحبًا بكم في خور دبي</h2>
                                </div>

                                <div className="text-box">
                                    <p>موطن المعالم الشهيرة مثل دبي كريك مارينا وملاذ رأس الخور للحياة البرية، يجمع دبي كريك هاربور بين الأناقة الحضرية والجمال الطبيعي. تمتع بالتجول على طول البحيرات الهادئة، وتناول الطعام على الواجهة البحرية، واستمتع بإطلالات بانورامية على أفق المدينة.</p><br/>
                                    <p>متصل بشكل مثالي بـ وسط مدينة دبي، ومطار دبي الدولي، والتوسع القادم لمترو دبي، مما يوفر سهولة وصول لا مثيل لها وأسلوب حياة مميز.</p><br/>
                                    <p>اكتشف شققًا فاخرة وبنتهاوس وفنادق مثل فيدا كريك هاربور، وعنوان هاربور بوينت، وبالاس ريزيدنسز — جميعها تقدم مرافق عالمية، وتجارب تسوق وترفيه في وجهة ساحلية واحدة نابضة بالحياة.</p><br/>
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
                        {/*End About One Content */}
                    </div>
                </div>
            </section>
            {/*End About One */}
        </>
    )
}
