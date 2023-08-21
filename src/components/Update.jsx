import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, updateData } from '../redux/userDetailsSlice'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

   
     const [userUpdate, setUserUpdate] = useState({})
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const {id} = useParams()


     const {users, isLoading} = useSelector((state) => state.app)

     
     useEffect(() => {
         const singleUser = users.filter((item) => item.id === id)
         setUserUpdate(singleUser[0]);
   }, [])
      


     const handleChange = (e) =>{
        const {name, value} = e.target
        setUserUpdate({...userUpdate, [name]:value})
    }

    
   
     const handleSubmit = (e) =>{
                 e.preventDefault()
                 dispatch(updateData(userUpdate))
                 navigate("/read")
                }
                
                
                 

  return (
    <>

  <div className="container my-4 w-75">
    <h2 className='text-center'>Update the Data</h2>

 
<form className='mx-auto w-50 my-3 ' onSubmit={handleSubmit}>

<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control"  aria-describedby="emailHelp" name='name' value ={userUpdate?.name} onChange={handleChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value ={userUpdate?.email} onChange={handleChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='age' value ={userUpdate?.age} onChange={handleChange}/>
  </div>

  
  {/* radio button */}

  <div className="form-check my-2">
  <input className="form-check-input" type="radio" name="gender"   value ="male" onChange={handleChange}  checked = {userUpdate?.gender === "male"} />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    male
  </label>
</div>
<div className="form-check my-2">
  <input className="form-check-input" type="radio" name="gender"  value ="female" onChange={handleChange} checked={userUpdate?.gender === "female"}/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    female
  </label>
</div>


 
 
  <button className="btn btn-danger my-2">Submit</button>
</form>
</div>
    </>
  )
}

export default Update

