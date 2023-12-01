import React, { useEffect, useState } from "react";

const ApiFetch = () => {
  const [data, setData] = useState([]);

  //   const dataFetching = () => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => {
  //         // console.log(res);
  //         res.json().then((result) => {
  //           console.log(result);
  //           setData(result);
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  const fetchDataAsync = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if(!res.ok){
        throw new Error("API Failed....")
      }
      console.log(res);

      const result = await res.json();
      console.log(result);
      setData(result);
    } 
    catch (err) {
console.log("ERROR=>", err);
    }
  };

  useEffect(() => {
    // dataFetching();
    fetchDataAsync();
  }, []);

  console.log("DATA=>", data);
  return (
    <div className="container">
      <h1>Posts Data</h1>
      <hr />
      <div>
        {data.map((posts, index) => {
          return (
            <ul>
              <li>
                <span className="text-danger">ID :</span> {posts.id}
              </li>
              <li>
                <span className="text-danger">Title :</span> {posts.title}
              </li>
              <li>
                <span className="text-danger">Body :</span> {posts.body}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ApiFetch;
