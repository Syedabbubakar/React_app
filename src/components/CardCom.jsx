import React from "react";
import Card from "react-bootstrap/Card";
import ButtonCom from "./ButtonCom";



const CardCom = ({myname, age, address, btnName, InputType, PHName, className, src}) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <img src={src} alt="" style={{height:'100%', width:'100%'}} />

          <h4>Name:{myname}</h4>
          <h4>Age:{age}</h4>
          <h4>Address:{address}</h4>
          <input type={InputType} placeholder={PHName} className="form-control mt-3" />
          <ButtonCom btnName={btnName} className={className}/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCom;
