
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutUs from './components/Aboutus/AboutUs'

// import AiService from './components/AiService'


import {Routes, Route} from 'react-router-dom'
// import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import { ScrollToTop } from './components/ScrollToTop'
import { AiMachine } from './components/services/AiMachine'
import { DataEngineering } from './components/services/DataEngineering'
import { Business } from './components/services/Business'
import { DataGovernance } from './components/services/DataGovernance'
import ManagedServices from './components/services/ManagedServices/ManagedServices'
import Solutions from './components/Solutions/Solutions'
import InsightsSection from './components/insights/InsightsSection'
import GoestoTop from './components/GoestoTop'
import { DigitalTrans } from './components/services/DigitalTrans'
import Industry from './components/industry/Industry'
import Careers from './components/Careers/Careers'
import Partnership from './components/Partnership/Partnership'
import Contact from './components/Contact/Contact'

function App() {
 

  return (
    <>

  
 
    <GoestoTop/>
    <Header/>
      <Routes>
       
        <Route path='/' element ={<Home/>}/>
        {/* <Route path='/' element ={<Home/>}/> */}
        <Route path='/aboutus' element ={<AboutUs/>}/>
        <Route path='/service/aimachine' element ={<AiMachine/>}/>
        <Route path='/service/dataengineering' element ={<DataEngineering/>}/>
        <Route path='/service/businessIntelligence' element ={<Business/>}/>
        <Route path='/service/governance' element ={<DataGovernance/>}/>
        <Route path='/service/managedservice' element ={<ManagedServices/>}/>
        <Route path='/solutions' element ={<Solutions/>}/>
        <Route path='/insights' element ={<InsightsSection/>}/>
        {/* <Route path='/industry' element ={<Industry/>}/> */}
        <Route path='/industry' element ={<Industry/>}/>
        <Route path='/service/digitaltransformation' element ={<DigitalTrans/>}/>
        <Route path='/career' element ={<Careers/>}/>
        <Route path='/partners' element ={<Partnership/>}/>
        <Route path='/contact' element ={<Contact/>}/>
      </Routes>
      <ScrollToTop position="right"/>
    <Footer/>
 


    </>
  )
}

export default App
