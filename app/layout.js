import 'bootstrap/dist/css/bootstrap.min.css';

import { Inter } from 'next/font/google'
import Navigation from './nav/navigation'
import './globals.css'
import Header from './header/header'
import Navigation2 from './nav/navigation2'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
      
  
   
  
  return (
    <html lang="en"data-bs-theme="dark">
      <body className={inter.className}>
      
        <Navigation />
        <Header />
        <Navigation2 />
        {children}
        
        </body>
    </html>
  )
}
