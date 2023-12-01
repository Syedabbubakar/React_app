import React, { useEffect, useRef } from 'react'

const UseRef = () => {

  const refHeading = useRef()
  const refInput = useRef()

  useEffect(()=>{
    console.log(refHeading.current.innerHTML);
  })

const changeHandle = () =>{
  refHeading.current.innerHTML="HI...."
  refHeading.current.style.color="red"
}

const submitRef = (e) =>{
  e.preventDefault()
  console.log(refInput.current.value);
}

  return (
    <div className='container p-4 bg-light'>
      <h1 ref={refHeading}>Helloo....</h1>
      <button className='btn btn-secondary mt-4' onClick={changeHandle}>Change</button>

      <form className='form-input' onSubmit={submitRef}>
      <input type="text" ref={refInput}/>
      <input type="password" />
      <button className='btn btn-info' type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default UseRef