import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/style.css"
import 'swiper/css'
import Script from 'next/script';
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { dM_Sans, } from '@/lib/font'
export const metadata = {
    title: 'Dubai Creek Harbour AR - EMAAR',
    description: 'Project by Emaar',
}

export default function RootLayout({ children }) {
     return (
         <html lang="en" className={`${dM_Sans.variable}`}>
            <head>

              {/* Google Analytics */}
{/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-ZWL7SWGJFK"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZWL7SWGJFK');
        `}
      </Script>

     
      </head>
            <body>
                {children}
            </body>
        </html>
    )
}
