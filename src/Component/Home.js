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
                  console.log(props.titledata[index]);
                  console.log(props.statusdata[index]);
                  let Ntitle=[...props.titledata];
                  let Nstatus=[...props.statusdata];
                  Ntitle.splice(index, 1);
                  Nstatus.splice(index, 1);
                  console.log(props.titledata);
                  console.log(props.statusdata);
                  
                    let olditem = [...props.listitem];
                    olditem.splice(index, 1);
                  let  Ndata={title:[...Ntitle],status:[...Nstatus],Litem:[...olditem]}
                    console.log(Ndata)
                    props.deleteitem(Ndata)
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
        listitem: state.listitems,
        titledata: state.titlearr,
        statusdata: state.statusarr
    }
}
const mapdispatchtoprop = (dispatch) => {
    return {
        deleteitem: (Ndata) => {
            // console.log(lstitm);
            dispatch({ type: "dltitm", payload: Ndata})
        }
    }
}
export default connect(mapStateToProp, mapdispatchtoprop)(Home);







