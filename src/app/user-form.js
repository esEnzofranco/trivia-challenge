import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUserName } from "../redux/user-reducer";
import '../css/user-form.css'

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer);

  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setUserName(inputName);


    if (/^[a-zA-Z]{3,10}$/.test(inputName) || inputName === "") {
      setErrorMessage("");
    } else {
      setErrorMessage("The username must be between 3 and 10 characters and can only contain letters.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^[a-zA-Z]{3,10}$/.test(userName)) {
      dispatch(saveUserName(userName));
    } else {
      setErrorMessage("The username must be between 3 and 10 characters and can only contain letters.");
    }
  };

  return (
    <div className="user-form-container">
      <div className="user-form-content">
        <h2 className="text-center">Create your username to start playing</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
          <div className="mb-2">
            <input
              id='input'
              type="text"
              placeholder="Enter your name here"
              value={userName}
              onChange={handleNameChange}
              className="form-control"
            />
          </div>
          <button type="button submit" className="btn btn-primary">Guardar</button>
        </form>
        <p style={{ color: "red" }}>{errorMessage}</p>
      </div>

    </div>
  );
};

export default UserForm;