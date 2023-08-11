
import './App.css';

import MainPage from './MainPage'
import Dashboard from './Dashboard'

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className = "App">
       <BrowserRouter>
      <Routes>
         <Route path="/" element={<MainPage/>}> </Route>
        <Route path="/dashboard" element={<Dashboard/>}> </Route>
        
      
      </Routes>
    </BrowserRouter>
      

    </div>
  )
}

export default App;
