import React, { useState } from "react";

const LocalStorage = () => {
  const setLocalData = () => {
    localStorage.setItem();
    localStorage.setItem("email", "Syed983@gmail.com");
  };

  const removeData = () => {
    // localStorage.removeItem('name')
    // localStorage.removeItem('email')

    localStorage.clear()
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
  }

  return (
    <div className="container p-4 mt-4 bg-light">
      <h3>Local Storage</h3>
      <hr />

      <h1>Name: {localStorage.getItem("name")}</h1>
      <h1>Email: {localStorage.getItem("email")}</h1>

      <form action="" onSubmit={handleSubmit} onReset={removeData}>
        {/* <button className="btn btn-success mt-4" onClick={setLocalData}>
          Set Items
        </button>
        <button className="btn btn-danger mt-4 ms-4" onClick={removeData}>
          Remove Item
        </button> */}

        <input type="text" className="form-control mb-4" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" className="form-control mb-4" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button type="submit" className="btn btn-success ms-4">Submit</button>
        <button type="reset" className="btn btn-danger ms-4">Clear</button>
      </form>
    </div>
  );
};

export default LocalStorage;
