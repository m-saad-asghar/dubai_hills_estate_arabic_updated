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
                    <p>تُعد شركة إعمار العقارية رائدة عالمياً في قطاع العقارات، مشهورة بابتكار مجتمعات متكاملة وصياغة مستقبل الحياة العصرية. امتلاك عقار من إعمار يتجاوز كونه استثماراً مالياً — فهو يمثل الثقة باسم عالمي موثوق، تجربة أسلوب حياة فاخر، والانتماء إلى مجتمع مزدهر حيث تتحول الطموحات إلى واقع ملموس.</p>
                </div>

                <TeamsListing/>
            </div>
        </section>
        </>
    )
}
