import React  from 'react';
import About from './cmp/About';
import Home from './cmp/Home'
import Form from './cmp/Form'
import {BrowserRouter , Routes,Route,} from "react-router-dom";
export default function App()
{
    return(
    <BrowserRouter>
        <Routes>
           
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>} />
                <Route path="/Form" element={<Form/>} />


            </Routes>
   </BrowserRouter>
        );
    
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);