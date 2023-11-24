import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const StateObj = () => {
  //     const data = {
  //         name:'Irfan',
  //         age:27,
  //         address:'Nanded'
  //     }

  //    const [uData, setUdata] = useState(data)
  //    console.log(uData);

  const data = ["Irfan", "27", "Nanded"];

  const [Udata, setUdata] = useState(data);
  console.log(data);

  const updateHandler = () => {
    setUdata({});
  };

  return (
    <div className="container p-4 bg-light">
      <div className="row">
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <div className="row">
                {Udata.map((item, index) => {
                  return <div className="col-md-6 mb-4" key={index}>{item}</div>;
                })}
              </div>
              <Button onClick={updateHandler} variant="primary">
                Update
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StateObj;
