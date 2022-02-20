import React, { useState, useEffect } from "react";
import "./UserForm.scss";
import { ImCross } from "react-icons/im";


export const UserForm = ({ createUser, roles: ROLE_USER = [], close }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  const changeAge = (e) => {
    let temp = e.target.value;
    setAge(temp);
  };

  const getName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    setDisabled(!(name.length > 3 && age.length > 0));
  }, [name, age]);

  const handleData = (e) => {
    e.preventDefault();
    const newUser = { name: name, age: age, id: Date.now() };
    createUser(newUser);
  };

  return (
    <div className="form-holder">
      <div className="form-header">
        <div className="form-header_col1">
          <h2>Create account</h2>
        </div>

        <div className="form-header_col2">
          <span onClick={close} > <ImCross size={20} /></span>
        </div>
      </div>
      <form className="user-form" name="user-create" onSubmit={handleData}>
        <div className="user-form__input-holder">
          <label>Username</label>
          <input value={name} onChange={getName} className="user-form__input"/>
        </div>
        <div className="user-form__input-holder">
          <label>Password</label>

          <input value={age} onChange={changeAge} type="password" className="user-form__input"/>
        </div>
        <div className="user-form__button-holder">
          <button disabled={isDisabled} className="user-form__button">LOGIN</button>
        </div>
      </form>
    </div>
  );
};
