import React from "react";
import { connect } from "react-redux";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Status = (props) => {
  return (<>
    <div className="card-header" style={{width: "18rem",margin:"2vw", marginTop:"10vw"}}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.tdata}</li>
        <li className="list-group-item">{props.sdata}</li>

      </ul>
    </div>
   
  </>)

}





const mapToprop = (state) => {
  return {

    titledata: state.titlearr,
    statusdata: state.statusarr


  }
}
export default connect(mapToprop)(Status);
