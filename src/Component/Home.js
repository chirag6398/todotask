import React, { useContext } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import Listitems from "../Homecomponent/Listitems"

const Home = (props) => {
 
    const centerstyle = {
        position: "absolute",
        top: "15%",
        width: "30%",
        backgroundColor: "black",
        height: "70%",
        boxShadow: " 1px 2px 2px 3px rgb(88, 84, 84)",
        borderRadius: "15px"
    }
    let listitems = null;



    if (props.cstatus) {
        console.log("in if statement");
        listitems = (props.listitem.map((val, index) => {
    return(
            <Listitems
                key={index}
                Litem={val}
                onClicked={(event) => {
                  
                    let olditem = [...props.listitem];
                    olditem.splice(index, 1);
                    props.deleteitem(olditem)
                }}
            ></Listitems>

    )
      
        }
        )
        )
    }


    return (<>
        <div style={{
            height: "100%",
            width: "100%",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
        } >

            <div style={centerstyle}>
                <h1 style={{
                    textTransform: "capitalize",
                    textAlign: "center",
                    color: "white"
                }}>



                    <ul>
                        <li>W</li>
                        <li>e</li>
                        <li>l</li>
                        <li>c</li>
                        <li>o</li>
                        <li>m</li>
                        <li>e</li>
                        <li>-</li>
                        <li>T</li>
                        <li>o</li>
                        <li>-</li>
                        <li>T</li>
                        <li>o</li>
                        <li>d</li>
                        <li>o</li>
                        <li>-</li>
                        <li>L</li>
                        <li>i</li>
                        <li>s</li>
                        <li>t</li>

                    </ul>


                </h1>
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







