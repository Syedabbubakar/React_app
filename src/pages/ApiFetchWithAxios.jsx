import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiFetchWithAxios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

//   const getData = () => {
//     axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
//       console.log(result.data);
//       setData(result.data);
//     });
//   };

const getData = async () => {
   const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(res.data);
      setData(res.data);
  };

  return (
    <div className="container p-4 n-4">
      <h1>Get Data Axios</h1>
      <hr />
      <div>
        {data.map((item) => {
          return (
            <ul>
              <li>
                <span className="text-danger ">ID :</span> {item.id}
              </li>
              <li>
                <span className="text-danger">Title :</span> {item.title}
              </li>
              <li>
                <span className="text-danger">Body :</span> {item.body}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ApiFetchWithAxios;
