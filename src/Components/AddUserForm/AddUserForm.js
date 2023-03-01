import React from "react";
import classes from "./AddUserForm.module.css";

const AddUserForm = (props) => {

    const formSubmissiomHandler = (event) => {
        //prevents page from being reloaded by default
        event.preventDefault();

        props.onFormInfo(event.target.value);
        console.log(event.target.value);
      
    };


  return (
    <form className={classes.addUserForm} onSubmit={formSubmissiomHandler}>
      <h1>Enter your profile info.</h1>
      <div>
        <input type="text" />
        <label>Username</label>
      </div>
      <div>
        <input type="text" />
        <label>Name</label>
      </div>
      <div>
        <input type="text" />
        <label>City</label>
      </div>

      <button>SUBMIT</button>
    </form>
  );
};

export default AddUserForm;
