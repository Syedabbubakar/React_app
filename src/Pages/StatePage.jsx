import React, { useState } from "react";

const StatePage = () => {
  //  const [state, setState] = useState(true)

  //  const ChangeState = () => {
  //   setState(state +1);
  //  }
  //  const ChangeState1 = () => {
  //   setState(state -1);
  //  }
  

  const [ isShow, setIsShow ] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

 
  return (
    <div className="container p-4">
      {isShow ? 
        <>
          <h1>Heading 1</h1>
          <h1>Heading 2</h1> 
        </>
          
          :

       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, perspiciatis architecto saepe quae vitae rerum magnam eligendi! Ad similique magnam optio molestiae maxime vitae suscipit ullam, eligendi officiis ab nam.</p>
      }

      <button className={isShow ? "btn btn-danger" : "btn btn-success"} onClick={handleShow}>
        {

          isShow ? "Hide" : "Show"
        }
        
      </button>

      {/* <h1>{state}</h1> */}
      {/* <button onClick={ChangeState} className='btn btn-warning'>Increase</button>
        <button onClick={ChangeState1} className='btn btn-danger'>Decrease</button> */}
    </div>
  );
};

export default StatePage;
