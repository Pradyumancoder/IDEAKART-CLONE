import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Lasthome from './Sec_Coponents/Lasthome';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>

      <Route path="/" element={<Homepage/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Lasthome' element={<Lasthome/>}/>

      
      
     </Routes>
     {/* <Footer/> */}
     {/* <Login/> */}
     {/* <Contact/> */}
    {/* <About/> */}
    {/* <Homepage/> */}
    {/* <Lasthome/> */}
    {/* <Bill/> */}
    {/* <Navbar/> */}
  
    </div>
  );
}

export default App;
