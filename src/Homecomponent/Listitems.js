import React, { useRef, useEffect } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from "@material-ui/icons/Delete";
import HCstyle from "../assets/styles/Homecomponent.module.css";
import { TweenMax } from "gsap";

const Listitems = (props) => {
  let DltList = useRef(null);
  useEffect(() => {
    TweenMax.from(DltList, 1, { delay: 2, x: 800, duration: 1 });
  });
  return (
    <>
      <li
        className={HCstyle.list}
        ref={(el) => {
          DltList = el;
        }}
      >
        <button
          type="button"
          className="btn btn-outline-danger btn-sm  "
          style={{
            marginRight: "9px",
            marginBottom: "8px",
          }}
          onClick={props.onClicked}
        >
          {" "}
          <Tooltip title="remove item from list">
            <DeleteIcon />
          </Tooltip>
        </button>
        <span style={{ color: "white" }}>{props.Litem}</span>
      </li>
      <br />
    </>
  );
};

export default Listitems;
