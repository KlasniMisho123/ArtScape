import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";



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
      <body className="">
        {header}
        {children}
        {footer}
        </body>
    </html>
  )
}
