import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "./head"
import { Lobster, Pacifico, Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'ArtScape',
  description: 'Art Online Gallery',
}

const header = (
  <Header/>
)

const footer = (
  <Footer/>
)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
          integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body className="">
        {header}
        {children}
        {footer}
        </body>
    </html>
  )
}
