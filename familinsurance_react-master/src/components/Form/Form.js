import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`name`, name);
    console.log(`email`, email);
    const URL = "http://localhost:5000/newsletter";
    const data={
        nombre:name,email
    }
    const config={
        body:JSON.stringify(data),
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        }
    }
    const sendData = await fetch(URL,config);
    const responseData= await sendData.json()
    console.log(`responseData`,responseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h2>Subscribe to our Newsletter</h2>
        <p>
          Lorem ipsum text about why you should subscribe to our newsletter
          blabla. Lorem ipsum text about why you should subscribe to our
          newsletter blabla.
        </p>
      </div>

      <div className="container">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          name="name"
          required
        />
        <input
          type="text"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          name="mail"
          required
        />
        <label></label>
      </div>

      <div className="container">
        <input type="submit" value="Subscribe" />
      </div>
    </form>
  );
}
