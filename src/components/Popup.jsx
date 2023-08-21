import React from 'react'
import "../assets/Css/Popup.css"
import { useSelector } from 'react-redux'

const Popup = ({id, setShowPopup, showPopup}) => {
    const allUser = useSelector((state) => state.app.users)

    const singleUser = allUser.filter((item) => item.id === id)
  return (
    <>

    <div className="modal">
      <div className="popup">
        <button className =" btn btn-primary" onClick={() => setShowPopup(false)}>Close</button>
        <h2 className='my-3'>{singleUser[0].name}</h2>
        <h5>{singleUser[0].email}</h5>
        <h6>{singleUser[0].age}</h6>
        <p>{singleUser[0].gender}</p>
      </div>

    </div>
      
    </>
  )
}

export default Popup
