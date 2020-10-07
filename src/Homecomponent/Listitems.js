import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from '@material-ui/icons/Delete';
const Listitems = (props) => {

    return (<>
        <span style={{ height: "1vw" }}>  
        <li
            style={{
                listStyle: "none",
                color: "white"
            }}>
            <button
                type="button"
                className="btn btn-outline-danger btn-sm  "
                style={{
                    marginRight: "9px",
                    marginBottom: "4px"
                }}
                onClick={props.onClicked}
            >  <Tooltip title="remove item from list"><DeleteIcon /></Tooltip>
            </button>
            <span style={{
                color: "white",
            }}> {props.Litem}</span>
        </li></span>



    </>)


}

export default Listitems;
