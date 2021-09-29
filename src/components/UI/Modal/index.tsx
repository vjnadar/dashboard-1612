import React from "react";
import { ModalProps } from "./types";
import "./Modal.scss";
function Modal({ modalCloseFunction, arg }: ModalProps): JSX.Element {
  return <div className="Modal" onClick={() => modalCloseFunction(arg)}></div>;
}

export default Modal;
