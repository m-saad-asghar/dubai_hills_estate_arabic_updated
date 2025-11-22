import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/style.css"
import 'swiper/css'
import Script from 'next/script';
import WhatsAppButton from "../components/CustomComponents/WhatsAppButton";
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

      <Script
          id="ms-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u9fgwk7zl5");
            `,
          }}
        />

     
      </head>
            <body>
                {children}
                 <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <WhatsAppButton />
        </div>
            </body>
        </html>
    )
}
