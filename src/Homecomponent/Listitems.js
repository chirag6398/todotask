import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from '@material-ui/icons/Delete';
import HCstyle from "../assets/styles/Homecomponent.module.css"

const Listitems = (props) => {

    return (<>

        <li className={HCstyle.list}>
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
            <span style={{ color: "white" }}>{props.Litem}</span>
        </li>




    </>)


}

export default Listitems;
