import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, readUser } from '../redux/userDetailsSlice'
import Loading from './Loading'
import Popup from './Popup'
import { Link } from 'react-router-dom'
import "../images/Create.css"



const Read = () => {

    const [id, setId] = useState()
    const [showPopup, setShowPopup] = useState(false)
    const [radioData, setRadioData] = useState('')

    const dispatch = useDispatch()

  const {users, isLoading, searchUser} = useSelector((state) => state.app)

     useEffect(() => {
        dispatch(readUser({}))
    }, [])
    
    
   if (isLoading) {
      return <Loading/>
   }

  return (
    <>
      <div className='container-fluid '>
         
         <div className="container d-flex py-2 justify-content-center align-item-center ">

         <div className="form-check my-2 mx-2">
  <input className="form-check-input " type="radio" name="gender"  checked={radioData === ""} onChange={(e) => setRadioData(e.target.value)} />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    All
  </label>
</div>
            

         <div className="form-check my-2 mx-2">
  <input className="form-check-input" type="radio" name="gender"   value ="male" checked={radioData === "male"} onChange={(e) => setRadioData(e.target.value)} />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    male
  </label>
</div>
<div className="form-check my-2 mx-2">
  <input className="form-check-input" type="radio" name="gender"  value ="female"  checked={radioData === "female"} onChange={(e) => setRadioData(e.target.value)}/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    female
  </label>
</div>
         </div>
         
    { showPopup && <Popup id={id} showPopup={showPopup} setShowPopup={setShowPopup}/>}
  
        {
            users && users.filter((item) =>{
                        if (searchUser.length === 0) {
                        return item
                 }else{
                     return item.name.toLowerCase().includes(searchUser.toLowerCase())
                 }
               
                     
            }).filter((item) =>{
                  if (radioData === "male") {
                    return item.gender === radioData
                  } else if (radioData === "female")
                  {
                       return item.gender === radioData
                  }
                  else{
                    return item
                  }
            })
            
            
            .map((item) =>{
                const {name, email, age, gender, id} = item
                return(
                    <div className="container" key={id}>
      <div className="card w-50 mx-auto my-2  bg-dark text-white" >
  <div className="card-body">
    <h5 className="card-title text-white">{name}</h5>
    <h6 className="card-subtitle mb-2 text-white">{email}</h6>
    
    <p className="card-text">{gender}</p>
    <button href="#" className="card-link text-decoration-none text-black" onClick={() =>[setId(id), setShowPopup(true)]}>View</button>
    <Link to={`/update/${id}`} className="card-link text-decoration-none text-warning">Edit</Link>
    <Link  className="card-link text-decoration-none text-warning" onClick={() => dispatch(deleteUser(id))}>Delete</Link>
  </div>
</div>
      </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Read
