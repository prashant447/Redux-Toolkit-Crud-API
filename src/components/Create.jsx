import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../redux/userDetailsSlice'
import { useNavigate } from 'react-router-dom'
import "../images/Create.css"


const Create = () => {

     const [user, setUser] = useState({})
     const dispatch = useDispatch()

     const navigate = useNavigate()


     const handleChange = (e) =>{
        const {name, value} = e.target
        setUser({...user, [name]:value})
    }

      
   
     const handleSubmit = (e) =>{
                 e.preventDefault()
                 dispatch(createUser(user))
                 navigate("/read")
                }
                
                
                 

  return (
    <>
     <div className="container-fluid image ">
  <div className="container py-3 w-75 ">
    <h2 className='text-center'>Create the Data</h2>

 
<form className='mx-auto w-50 my-3 ' onSubmit={handleSubmit}>

<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control"  aria-describedby="emailHelp" name='name' value ={user.name} onChange={handleChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value ={user.email} onChange={handleChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='age' value ={user.age} onChange={handleChange}/>
  </div>

  
  {/* radio button */}

  <div className="form-check my-2">
  <input className="form-check-input" type="radio" name="gender"   value ="male" onChange={handleChange}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    male
  </label>
</div>
<div className="form-check my-2">
  <input className="form-check-input" type="radio" name="gender"  value ="female" onChange={handleChange}/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    female
  </label>
</div>


 
 
  <button className="btn btn-danger my-2">Submit</button>
</form>
</div>
</div>
    </>
  )
}

export default Create
