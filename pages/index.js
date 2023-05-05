import React from 'react'
import HomePage from './HomePage'
import Navbar from './UI/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function index() {
  return (
    <div>
        <Navbar />
        <HomePage />
    </div>
  )
}

export default index