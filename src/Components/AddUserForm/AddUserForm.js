import React, { useState } from "react";
import classes from "./AddUserForm.module.css";

const AddUserForm = (props) => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);    
    };
    
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const cityChangeHandler = (event) => {
        setCity(event.target.value);
    };

    const formSubmissiomHandler = (event) => {
        //prevents page from being reloaded by default
        event.preventDefault();
        
        
       props.onFormInfo({
        username: username,
        name: name,
        city: city,
       });

        setUsername('');
        setName('');
        setCity('');
      
    };


  return (
    <form className={classes.addUserForm} onSubmit={formSubmissiomHandler}>
      <h1>Enter your profile info.</h1>
      <div>
        <input type="text" id="username" value={username} onChange={usernameChangeHandler} />
        <label>Username</label>
      </div>
      <div>
        <input type="text" id="name" value={name} onChange={nameChangeHandler} />
        <label>Name</label>
      </div>
      <div>
        <input type="text" id="city" value={city} onChange={cityChangeHandler} />
        <label>City</label>
      </div>

      <button>SUBMIT</button>
    </form>
  );
};

export default AddUserForm;
