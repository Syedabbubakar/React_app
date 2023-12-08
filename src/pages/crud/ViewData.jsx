import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const ViewData = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [loader, setLoader] = useState(false);

  const baseURL =
    "https://6571a476d61ba6fcc01327e9.mockapi.io/example/curd/react/curdreact";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoader(true);
      const result = await axios.get(baseURL);
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log(error);
    } finally {
        setLoader(false)
    }
  };
  console.log("Data=>", data);

  const deleteData = async (id) => {
    await axios.delete(`${baseURL}/${id}`);
    console.log(id);
    getData();
  };

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
            {
                loader &&  <Spinner animation="grow" variant="dark" className="p-5"/>
            }
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>
                    <Link
                      className="btn btn-warning me-3"
                      to={`/EditData/${item.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteData(item.id)}
                    >
                      Delete
                    </button>
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
