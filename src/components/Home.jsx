import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Welcome to React and MUI Home</h1>
        <Link to="TypographyPage">TypographyPage</Link>
        <Link to="MuiButtonPage">MuiButtonPage</Link>

    </div>
  )
}

export default Home