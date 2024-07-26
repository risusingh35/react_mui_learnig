import React from 'react'
import { Typography } from "@mui/material"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const MuiTypography = () => {
  return (
    <div>
        <Link to="/">Home</Link>
      <Typography variant='h1'>Typography h1</Typography>
      <Typography variant='h2'>Typography h2</Typography>
      <Typography variant='h3'>Typography h3</Typography>
      <Typography variant='h4'>Typography h4</Typography>
      <Typography variant='h5'>Typography h5</Typography>
      <Typography variant='h6' >Typography h6</Typography>
      <Typography variant='h6' component={'h1'}>Typography h6</Typography>

      <Typography variant='subtitle1'>Typography subtitle1</Typography>
      <Typography variant='subtitle2'>Typography subtitle2</Typography>
      
      <Typography variant='body1'>Typography body1</Typography>
      <Typography variant='body2'>Typography body2</Typography>
    </div>
  )
}

export default MuiTypography