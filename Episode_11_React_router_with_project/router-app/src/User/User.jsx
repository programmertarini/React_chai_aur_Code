import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userName} = useParams()
  return (
    <div className='text-center bg-blue-300 text-white p-[12px]'>User : {userName} </div>
  )
}

export default User