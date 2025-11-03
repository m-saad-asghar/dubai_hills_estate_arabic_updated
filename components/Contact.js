'use client'
import React, { useState, useEffect } from 'react'
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function Contact() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        country_of_residence: '',
        bedrooms: '',
        duration: '',
        purpose: '',
    });
    const [phoneError, setPhoneError] = useState('');
    const [submitMessage, setSubmitMessage] = useState(null);
    const [isOpen, setOpen] = useState(false)
    const [keepUpdated, setKeepUpdated] = useState(true);
    const [disableBtn, setDisableBtn] = useState(false);
    const searchParams = useSearchParams();
    const [countryValue, setCountryValue] = useState('');
    const [originValue, setOriginValue] = useState('');

    useEffect(() => {
        const origin = searchParams.get('origin');
        const country = searchParams.get('country');

        if (origin) {
            if (origin.toLowerCase() === 'meta') {
                setOriginValue('Meta');
            } else if (origin.toLowerCase() === 'google') {
                setOriginValue('Google Ads');
            } else {
                setOriginValue('');
            }
        } else {
            setOriginValue('');
        }

        if (country) {
            const formattedCountry = country
                .replace(/_/g, ' ')
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase());
            setCountryValue(formattedCountry);
        } else {
            setCountryValue('');
        }
    }, [searchParams]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePhoneChange = (value, data, event, formattedValue) => {
        setFormData({
            ...formData,
            phone: value,
        });

        if (value.length > 0 && !isPossiblePhoneNumber('+' + value)) {
            setPhoneError('يرجى إدخال رقم هاتف صالح (بما في ذلك رمز الدولة).');
        } else {
            setPhoneError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.phone) {
            setPhoneError("رقم الهاتف مطلوب");
            return;
        } else if (formData.phone.length < 9 || formData.phone.length > 15) {
            setPhoneError("يجب أن يكون رقم الهاتف بين 9 و15 رقمًا");
            return;
        } else {
            setPhoneError("");
        }

        let phone = formData.phone.replace(/^(\d{1,3})0/, '$1');
        formData.phone = phone;

        const payload_email = {
            LANDING_PAGE: "Dubai Creek Harbour AR Landing Page",
            ORIGIN: originValue,
            COUNTRY: countryValue,
            NAME: formData.name,
            PHONE_TEXT: formData.phone,
            EMAIL: formData.email,
            COUNTRY_OF_RESIDENCE: formData.country_of_residence,
            BEDROOMS: formData.bedrooms,
            DURATION: formData.duration,
            PURPOSE: formData.purpose,
        };

        const payload = {
            fields: {
                TITLE: `Dubai Creek Harbour AR Landing Page`,
                UF_CRM_1760777561731: originValue,
                NAME: formData.name,
                PHONE_TEXT: formData.phone,
                PHONE: [
                    {
                        VALUE: formData.phone,
                        VALUE_TYPE: "WORK",
                    },
                ],
                EMAIL: [
                    {
                        VALUE: formData.email,
                        VALUE_TYPE: "WORK",
                    },
                ],
                SOURCE_DESCRIPTION: formData.message,
                SOURCE_ID: "WEB",
                ASSIGNED_BY_ID: 25,
                UF_CRM_1754652292782: "Dubai Creek Harbour AR Landing Page",
                UF_CRM_1761206533: countryValue,
                UF_CRM_1761918592: formData.country_of_residence,
                UF_CRM_1761918627: formData.bedrooms,
                UF_CRM_1761918741: formData.duration,
                UF_CRM_1761918805: formData.purpose,
            },
            params: {
                REGISTER_SONET_EVENT: "Y",
            },
        };

        async function sendLeadEmail() {
            try {
                const res = await fetch("/api/send-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload_email),
                });

                const data = await res.json();
                console.log("تم إرسال البريد الإلكتروني:", data);
            } catch (err) {
                console.error("خطأ في إرسال البريد الإلكتروني:", err);
            }
        }

        try {
            setDisableBtn(true);
            const response = await fetch(
                "https://crm.shiroestate.ae/rest/25/btnspp9oeepo8jt6/crm.lead.add.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            const result = await response.json();
            setDisableBtn(false);

            if (result.result) {
                router.push('/thank-you');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    country_of_residence: '',
                    bedrooms: '',
                    duration: '',
                    purpose: '',
                });
                await sendLeadEmail();
            } else {
                setDisableBtn(false);
                toast.error("حدث خطأ ما. يرجى المحاولة مرة أخرى.", { duration: 5000 });
            }
        } catch (error) {
            setDisableBtn(false);
            console.error("خطأ في إرسال البيانات:", error);
            toast.error("حدث خطأ ما. يرجى المحاولة مرة أخرى.", { duration: 5000 });
        }
    };

    return (
        <>
            <div>
                <section className="contact-page" id="contact-form" dir='rtl'>
                    <div className="contact-page__bottom">
                        <div className="contact-two">
                            <div className="container">
                                <div className="contact-two__inner">
                                    <div className="title-box">
                                        <h2 style={{ color: "#ffffff" }}>تواصل معنا</h2>
                                        <p style={{ color: "#ffffff" }}>الحقول المطلوبة مُشار إليها بـ *</p>
                                    </div>
                                    <div className="contact-two__inner-box">
                                        <form onSubmit={handleSubmit} className="contact-page__form contact-form-validated">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <label className="form_label">
                                                            الاسم الكامل*
                                                        </label>
                                                        <input type="text" placeholder="أدخل الاسم الكامل" name="name" required
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <label className="form_label">
                                                            البريد الإلكتروني*
                                                        </label>
                                                        <input type="email" placeholder="أدخل بريدك الإلكتروني" name="email" required
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <label className="form_label">
                                                            رقم الهاتف* (بما في ذلك رمز الدولة)
                                                        </label>
                                                        <PhoneInput
                                                            name="phone"
                                                            country={"ae"}
                                                            value={formData.phone}
                                                            onChange={(value) => setFormData({ ...formData, phone: value })}
                                                            countryCodeEditable={false}
                                                            required
                                                            inputStyle={{
                                                                width: "100%",
                                                                borderRadius: "0",
                                                                border: phoneError ? "1px solid red" : "1px solid #000",
                                                                height: "60px",
                                                            }}
                                                        />
                                                        <p className='error_msg' style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{phoneError}</p>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <label className="form_label">
                                                            دولة الإقامة*
                                                        </label>
                                                        <input type="text" placeholder="أدخل دولتك" name="country_of_residence" required
                                                            value={formData.country_of_residence}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" style={{ marginBottom: 20 }}>
                                                    <div className="contact-page__input-box dropdown_styling">
                                                        <label className="form_label">
                                                            عدد غرف النوم*
                                                        </label>
                                                        <select name="bedrooms" value={formData.bedrooms} onChange={handleChange} required style={{height: 60}}>
                                                            <option value="">اختر عدد الغرف</option>
                                                            <option value="1 Bedroom">غرفة نوم واحدة</option>
                                                            <option value="2 Bedrooms">غرفتان</option>
                                                            <option value="3 Bedrooms">3 غرف نوم</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" style={{ marginBottom: 20 }}>
                                                    <div className="contact-page__input-box dropdown_styling">
                                                        <label className="form_label">
                                                            متى تخطط للشراء؟*
                                                        </label>
                                                        <select name="duration" value={formData.duration} onChange={handleChange} required style={{height: 60}}>
                                                            <option value="">اختر المدة</option>
                                                            <option value="Immediately">فورًا</option>
                                                            <option value="3 Months">خلال 3 أشهر</option>
                                                            <option value="6 Months">خلال 6 أشهر</option>
                                                            <option value="1 Year">خلال سنة</option>
                                                            <option value="More than a Year">أكثر من سنة</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box dropdown_styling">
                                                        <label className="form_label">
                                                            ما هو الغرض من الشراء؟*
                                                        </label>
                                                        <select name="purpose" value={formData.purpose} onChange={handleChange} required style={{height: 60}}>
                                                            <option value="">اختر الغرض</option>
                                                            <option value="Self-Use">استخدام شخصي</option>
                                                            <option value="Investment">استثمار</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 btn_styling">
                                                    <div className="contact-page__btn submit_btn">
                                                        <button className="thm-btn_submit" type="submit" disabled={disableBtn}>
                                                            <span className="txt">
                                                                إرسال
                                                            </span>
                                                        </button>
                                                    </div>

                                                    {submitMessage && (
                                                        <div style={{
                                                            marginTop: '15px',
                                                            padding: '10px',
                                                            backgroundColor: submitMessage.includes('شكراً') ? '#22c55e' : '#ef4444',
                                                            color: 'white',
                                                            borderRadius: '4px',
                                                            textAlign: 'center'
                                                        }}>
                                                            {submitMessage}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
