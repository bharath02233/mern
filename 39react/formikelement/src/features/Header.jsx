import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
   
    <div>
               <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://edupoly.netlify.app/common/assets/edupoly-logo-light.png" width="100px" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
       
        <li class="nav-item">
          <Link class="nav-link" to="/About">about</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Contact">contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Price">price</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/login">login</Link>
        </li>
        
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Javascript">javascript</Link></li>
            <li><Link class="dropdown-item" to="/Css">css</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/Countries">Countries</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/Students">Students</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/Employee">Employee</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/user">Users</Link>
        </li>
      </ul>
    </div>
  </div>
    <form className="d-flex">
              <input className="form-control me-2"type="search" placeholder="Search"aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
   </nav>
    </div>
  
    
  )
}

export default Header