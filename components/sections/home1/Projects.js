'use client'
import Link from "next/link"
import { useState } from "react"
import TeamsListing from "@/components/TeamListing";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift, FaKey, FaUsers, FaBriefcase, FaPassport, FaCity, FaStar } from "react-icons/fa";

export default function Projects() {
    
    return (
        <>
            {/*Start Service One */}
        <section className="why-one" id="why-emaar" dir="rtl">
            {/* <div className="service-one__shape2" style={{backgroundImage: 'url(assets/img/shape/service-v1-shape2.png)'}}>
            </div> */}
            <div className="container">
                <div className="sec-title">
                    <h2>لماذا إعمار؟</h2>
                </div>
                <div className="text-box project_content">
                    <p>إعمار العقارية، واحدة من أكثر شركات التطوير العقاري تكاملاً وقيمة وإعجابًا في العالم، تشكل أساليب حياة المستقبل. عند شراء عقار من إعمار، فإنك تستثمر في اسم يمكنك الوثوق به، وأسلوب حياة يمكنك الاستمتاع به، ومجتمع يمكنك الازدهار فيه، كل ذلك داخل مدينة تتحقق فيها الأحلام.</p>
                </div>

                <TeamsListing/>
            </div>
        </section>
        </>
    )
}
