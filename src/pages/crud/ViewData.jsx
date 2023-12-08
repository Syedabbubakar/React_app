import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const ViewData = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const baseURL = "https://6571a476d61ba6fcc01327e9.mockapi.io/example/curd/react/curdreact";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await axios.get(baseURL);
    console.log(result.data);
    setData(result.data);
  };
  console.log("Data=>", data);

  const deleteData = async (id) =>{

    await axios.delete(`${baseURL}/${id}`)
console.log(id);
getData()
  }

  return (
    <div className="border">
      <div className="bg-info py-2 px-4 d-flex justify-content-between">
        <h3 className="text-light">User Details</h3>
        <button
          className="btn btn-success"
          onClick={() => navigate("/AddData")}
        >
          Add User +
        </button>
      </div>

      <div className="">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>
                    <button className="btn btn-warning me-3">Edit</button>
                    <button className="btn btn-danger" onClick={()=>deleteData(item.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ViewData;
