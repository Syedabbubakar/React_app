import React from 'react'

const Person = (props) => {
    console.log(props);
    const {uname, age, married}= props.person;

  return (
    <div>
        <h3>Name:{uname}</h3>
        <h3>Age:{age}</h3>
        <h3>Married:{married.toString()}</h3>
    </div>
  )
}

export default Person