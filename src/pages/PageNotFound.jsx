import React from 'react'
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

const navigate = useNavigate()

  return (
    <div className='page-not-found-wrapper text-center'>
        <div>
        <h1>Error 404! Page Not Found</h1>
        <button className='btn btn-danger' onClick={()=>navigate("/home")}>Go To Home</button>
        </div>
    </div>
  )
}

export default PageNotFound