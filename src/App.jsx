import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Netflix from './Pages/Netflix'
import Player from './Pages/Player'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}
