import React from "react";
import "../assets/style/Product.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import biryani from "../assets/images/biryani.jpg"

const Product = () => {

  const data = new Promise((resolve, rejcet)=>{
    let a=4;

    if(a===6){
      resolve("success")
    }else{
      rejcet("reject")
    }
  })

  data.then((msg)=>{
    console.log("success data",msg);
  }).catch((err)=>{
console.log("reject data", err);
  })

  console.log(data);

  return (
    <div className="card-container">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={biryani} />
      <Card.Body>
        <Card.Title>Chicken Biryani</Card.Title>
        <Card.Text>
            <span><del>₹200</del><b> ₹120</b></span><p>40% off</p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Product;
