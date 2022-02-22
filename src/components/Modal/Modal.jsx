import React from "react";
import classes from "./Modal.module.scss";
import { UserForm } from "../UserForm/UserForm";

export const Modal = ({ movies, show, close }) => {
  const styleModal = [classes["modal-crs"]];
  if (!show) {
    styleModal.push(classes["hide"]);
  }

  return (
    <div className={styleModal.join(" ")} onClick={close} >
      <div onClick={(e) => e.stopPropagation()}>
        <UserForm movies={movies}  close={close}/>
      </div>
    </div>
  );
};
