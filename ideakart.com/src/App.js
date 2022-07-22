import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';
import Lasthome from './Sec_Coponents/Lasthome';
import Bill from "./Sec_Coponents/Bill"

function App() {
  return (
    <div className="App">
     {/* <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path='/signup' element={<Signup/>}/>
     </Routes> */}
     {/* <Footer/> */}
     {/* <Login/> */}
     {/* <Contact/> */}
    {/* <About/> */}
    {/* <Homepage/> */}
    {/* <Lasthome/> */}
    <Bill/>
    </div>
  );
}

export default App;
