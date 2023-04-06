import "./App.css";
import Todopage from "./pages/Todopage";
import Homepage from './pages/Homepage'
import Todaypage from './pages/Todaypage'
import Calendar from './pages/Calendar';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

function App(){
    return(
        <Routes>
        <Route exect path="/" element={<Homepage />}  />
        <Route path="/todo" element={<Todopage />}  />
        <Route path="/today" element={<Todaypage />}  />
        <Route path="/calendar" element={<Calendar/>}  />
      </Routes>
    );
}
export default App;