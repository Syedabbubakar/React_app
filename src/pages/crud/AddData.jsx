import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddData = () => {
  const navigate = useNavigate();

  const baseURL = "https://6571a476d61ba6fcc01327e9.mockapi.io/example/curd/react/curdreact";

  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
  });

  // de-structuring of data object
  const {name, mobile, email, address} = data

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(data);

    axios.post(baseURL,{
        name,
        mobile,
        email,
        address
    }).then((res)=>{
        setTimeout(()=>navigate("/"),2000)
        toast.success("Successfully Added");
        setData({
            name:"",
            mobile:"",
            email:"",
            address:""
        })

        console.log(res);
    })
  }

  return (
    <div className="border">
        <ToastContainer />
      <div className="bg-info py-2 px-4 d-flex justify-content-between">
        <h3 className="text-light">Add User Details</h3>
      </div>

      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <label htmlFor="" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Enter your Name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
          <label htmlFor="" className="form-label">
            Mobile No.
          </label>
          <input
            type="number"
            className="form-control mb-4"
            placeholder="Enter your Mobile Number"
            name="mobile"
            value={mobile}
            onChange={handleChange}
            required
          />
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control mb-4"
            placeholder="Enter your Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <label htmlFor="" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Enter your Address"
            name="address"
            value={address}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-secondary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddData;
