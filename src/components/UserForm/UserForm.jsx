import React, { useState, useEffect } from "react";
import "./UserForm.css";

export const UserForm = ({ createUser, roles: ROLE_USER = [] }) => {
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
    <form className="user-form" name="user-create" onSubmit={handleData}>
      <h2>Create user</h2>
      <label>Name user:</label>
      <input value={name} onChange={getName} />
      <label>Age: </label>
      <input value={age} onChange={changeAge} type="number" min={0} max={100} />

      <button disabled={isDisabled}>Send data</button>
    </form>
  );
};
