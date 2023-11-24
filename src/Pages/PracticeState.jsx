import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const PracticeState = () => {
  const data = [
    {
      id: 1,
      name: "Irfan",
      address: "Nanded",
    },
    {
      id: 2,
      name: "Adnan",
      address: "Parbhani",
    },
    {
      id: 3,
      name: "Sawood",
      address: "Mumbai",
    },
    {
      id: 4,
      name: "Junaid",
      address: "Pune",
    },
  ];

  const [state, setUdata] = useState(data);
  console.log(state);

  return (
    <div className="container p-4 bg-light" style={{ height: "100vh" }}>
      <div className="row">

        {state.map((item, index) => {
          return (
            <div className="col-md-3" key={item.id}>
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <h3>User ID : {item.id}</h3>
                  <h3>Name : {item.name}</h3>
                  <h3>Address : {item.address}</h3>

                  <Button variant="primary">Update</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default PracticeState;
