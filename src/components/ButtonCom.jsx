import React from 'react'

const ButtonCom = ({btnName, className}) => {
  return (
    <div>
        <button className={className}>{btnName}</button>
    </div>
  )
}

export default ButtonCom