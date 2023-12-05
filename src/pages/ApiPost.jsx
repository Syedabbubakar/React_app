import axios from "axios";
import React, { useState } from "react";

const ApiPost = () => {
  const [data, setData] = useState({
    title: "",
    body: "",
  });
  // const [body, setBody] = useState("")

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(first);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    axios.post("https://jsonplaceholder.typicode.com/posts", data).then((res)=>{
        console.log(res);
    })
  };



  return (
    <div className="container p-4 n-4">
      <h1>API Post</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="title"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="body"
          name="body"
          value={data.body}
          onChange={handleChange}
        />
        <br />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApiPost;
