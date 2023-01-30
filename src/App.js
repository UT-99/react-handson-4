import './App.css';
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Student from './components/Student';
import Contact from './components/Contact';
import Navigation from './components/Navigation'
import Edit from './components/Edit';
import AddStudents from './components/AddStudents';



const App = () => {
  return (
    <div>
      <Navigation/>
      

       <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Student" element={<Student/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Edit" element={<Edit/>}/>
          <Route path="/AddStudents" element={<AddStudents/>}/>
    </Routes> 
     </div>
  )
}

export default App