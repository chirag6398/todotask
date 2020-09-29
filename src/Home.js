import React, { useContext } from "react";
import Tooltip from '@material-ui/core/Tooltip';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from '@material-ui/icons/Delete';
//  import {cstatus,item,deleteitem} from "./Form"
import { connect } from "react-redux";






const Home = (props) => {
    //  let cstatus1=useContext(cstatus);
    //  let item1=useContext(item);
    //  let deleteitem1=useContext(deleteitem);
    const centerstyle = {
        position: "absolute",
        top: "15%",
        width: "30%",
      //  backgroundImage: "url('https://images.unsplash.com/photo-1527168027773-0cc890c4f42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60') ",
        // backgroundImage:"url(https://source.unsplash.com/400x300/notes) ",
        backgroundColor:"black",
        height: "70%",
        boxShadow: " 1px 2px 2px 3px rgb(88, 84, 84)",
        borderRadius: "15px"
    }
    let listitems = null;
    // console.log(cstatus1);

    if (props.cstatus) {
        console.log("in if statement");
        listitems = (props.listitem.map((val, index) => {
            return (<>

                <span style={{height:"1vw"}}>  <li 
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
                        onClick={(event) => {
                           
                            let olditem = [...props.listitem];
                            olditem.splice(event, 1);
                            props.deleteitem(olditem)
                        }}
                    >  <Tooltip title="remove item from list"><DeleteIcon /></Tooltip>
                    </button>
                    <span style={{
                        color: "white",
                    }}> {val}</span>
                </li></span>




            </>)
        }
        )
        )
    }


    return (<>
        <div style={{
            height: "100%",
            width: "100%",
            // backgroundColor: "black",
           // backgroundImage:"url(./notebook.jpg)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
        } >

            <div style={centerstyle}>
                <h1 style={{
                    textTransform: "capitalize",
                    textAlign: "center",
                    color:"white"
                }}>Welcome to todo app</h1>
                <hr></hr>
                <ol>
                    {listitems}

                </ol>
            </div>

        </div>

    </>);
}

const mapStateToProp = (state) => {
    return {
        cstatus: state.status,
        listitem: state.listitems
    }
}
const mapdispatchtoprop = (dispatch) => {
    return {
        deleteitem: (lstitm) => {
            // console.log(lstitm);
            dispatch({ type: "dltitm", payload: lstitm })
        }
    }
}
export default connect(mapStateToProp, mapdispatchtoprop)(Home);







