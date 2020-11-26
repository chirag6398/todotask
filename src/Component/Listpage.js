import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import Listitems from "../Homecomponent/Listitems";


const Home = (props) => {
 
    const centerstyle = {
        position: "absolute",
        left:"35%",
        top: "15%",
        width: "30%",
        backgroundColor: "black",
        height: "70%",
        boxShadow: " 1px 2px 2px 3px rgb(88, 84, 84)",
        borderRadius: "15px",
        overflow:"auto",
        opacity:"0.9"
    }
    let listitems = null;



    if (props.cstatus) {
       
        listitems = (props.listitem.map((val, index) => {
    return(
            <Listitems
                key={index}
                Litem={val}
                onClicked={(event) => {
                
                  let Ntitle=[...props.titledata];
                  let Nstatus=[...props.statusdata];
                  Ntitle.splice(index, 1);
                  Nstatus.splice(index, 1);
                 
                    let olditem = [...props.listitem];
                    olditem.splice(index, 1);
                  let  Ndata={title:[...Ntitle],status:[...Nstatus],Litem:[...olditem]}
                   
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
        cstatus: state.data.status,
        listitem: state.data.listitems,
        titledata: state.data.titlearr,
        statusdata: state.data.statusarr
    }
}
const mapdispatchtoprop = (dispatch) => {
    return {
        deleteitem: (Ndata) => {
           
            dispatch({ type: "dltitm", payload: Ndata})
        }
    }
}
export default connect(mapStateToProp, mapdispatchtoprop)(Home);







