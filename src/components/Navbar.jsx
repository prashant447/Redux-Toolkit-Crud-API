import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchUser } from '../redux/userDetailsSlice'

const Navbar = () => {

  const count = useSelector((state) => state.app.users)
    const [searchData, setSearchData] = useState("")

    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchUser(searchData))
  }, [searchData])
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container my-2">
    <Link to="/" className="navbar-brand">Redux-Toolkit</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Create Post</Link>
        </li>
        <li className="nav-item">
          <Link to="/read" className="nav-link active" >All Post ({count.length})</Link>
        </li>
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchData(e.target.value)}/>
        <button className="btn btn-outline-warning" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
      
    </>
  )
}

export default Navbar
