import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route,Link,Navigate} from 'react-router-dom';

import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import SignUp from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/Login" element={<Login />}/>
            <Route exact path="/signup" element={<SignUp />}/>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
