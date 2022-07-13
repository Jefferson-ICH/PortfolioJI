import React from 'react'
import Header from './Component/Head/Header'
import Home from './Component/Hero/Home'
import Features from './Component/Features/Features'
import Portfolio from './Component/Portfolio/Portfolio'
import Resume from './Component/Resume/Resume'
import Blog  from  './Component/Blog/Blog'
import Contact from './Component/Contact/Contact'
import Footer from "./Component/Footer"
import FloatingWhatsApp from 'react-floating-whatsapp' 
 
import './App.css' 


 const App = () => {
  return (
  <>
    <Header />
    <Home/>
    <Features/>
    <Portfolio/>
    <Resume/>
    <Blog/>
    <Contact/>
    <Footer />
    <FloatingWhatsApp 
        phoneNumber="+593962764718"
        accountName="Jeff"
        avatar='./logo192.png'
        allowClickAway
        height={280}
        statusMessage="En línea*"
        chatMessage="Hola! en que te puedo ayudar."
        placeholder="Escribir mensaje para Jefferson.."
        notificationDelay={60000} // 1 minute
       />

  </>
  )
 }
export default App
