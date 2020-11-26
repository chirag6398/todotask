import React from "react";
import { connect } from "react-redux";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Status = (props) => {
  return (<>
  <div >
    <div className="card-header" style={{width: "18rem",margin:"2vw", marginTop:"20vw",}}>
      <ul className="list-group list-group-flush" style={{borderRadius:"10px",boxShadow:"0px 2px 1px gray"}}>
        <li className="list-group-item"><span style={{fontWeight:"bold"}}>Title:</span> {props.tdata}</li>
        <li className="list-group-item"><span style={{fontWeight:"bold"}}>Status: </span>{props.sdata}</li>

      </ul>
    </div>
    </div>
   
  </>)

}





const mapToprop = (state) => {
  return {

    titledata: state.data.titlearr,
    statusdata: state.data.statusarr


  }
}
export default connect(mapToprop)(Status);
