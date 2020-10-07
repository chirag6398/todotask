import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Statusf from "./Status";
const Form = (props) => {
    const history = useHistory();
    let Formstatus = null;

    if (props.cstatus) {
        Formstatus = props.titledata.map((val1, index) => {

            return <Statusf key={index}
                tdata={val1}
                sdata={props.statusdata[index]}
            />
        })

    }


    return (<>
        <div style={{
            position: "absolute",
            top: "10%",
            left: "0px",
            height: "100%",
            width: "100%",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                position: "absolute",
                top: "4%",
                width: "20%",
                height: "45%",
                backgroundImage: "url(C:\Users\Cinni\Desktop\notebook.jpg) ",
                borderRadius: "20px",
                boxShadow: "1px 2px 0px 2px gray",
                textAlign: "center"
            }}>
                <h1 style={{
                    letterSpacing: "4px",
                    color: "whitesmoke"

                }}>Todolist</h1>
                <br></br>
                <input type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="add items to list"
                    value={props.item}
                    onChange={(event) => {
                        let item = event.target.value;

                        props.itemsHandler(item)
                    }}
                />
                <br></br>
                <input type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Title.."
                    value={props.ttl}
                    onChange={(event) => {
                        let titl = event.target.value;

                        props.titleHandlerHandler(titl)
                    }}
                />
                <br></br>
                <textarea type="text" className="form-control"
                    rows="1"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="status..."
                    value={props.inputstatus}
                    onChange={(event) => {
                        let inptstatus = "";
                        inptstatus = event.target.value;

                        props.inputstatusHandler(inptstatus);
                    }} />

                <br></br>
                <div className="input-group-prepend" style={{
                    position: "absolute",
                    right: "3%",
                    bottom: "2%"
                }}>
                    <button type="button"
                        className="btn btn-outline-success btn-sm "
                        style={{
                            borderRadius: "100px",
                            boxShadow: "1px 1px 1px 1px ",
                        }}
                        onClick={() => {

                            let lstitm = props.item;
                            {if(lstitm !==""){
                                props.addItemToList(lstitm);
                            history.goBack();
                            }
                            else 
                            alert(`Opps you have to add item`);}
                          
                        }}
                    >
                        <Tooltip title="add to list"><AddIcon />
                        </Tooltip></button>
                </div>
            </div>
            {/*             
 { props.cstatus?
          
         
         <div className="statustyle">
           <h2>Title:<span style={{padding:"3px",textTransform:"capitalize"}}>{props.titledata}</span></h2>
           <br/>
           <h2>Status:<span style={{padding:"3px",textTransform:"capitalize"}}>{props.statusdata}</span></h2>


         </div>:null 
         
}  */}

            {Formstatus}

        </div>
    </>
    )
}

const mapToprop = (state) => {
    return {
        cstatus: state.status,
        item: state.items,
        itemlist: state.listitems,
        inputstatus: state.inptstatus,
        ttl: state.title,
        titledata: state.titlearr,
        statusdata: state.statusarr


    }
}
const mapDispatchtoprop = (dispatch) => {
    return {
        itemsHandler: (item) => {
            console.log(item);
            dispatch({ type: "itemShowOnInput", payload: item })
        },
        addItemToList: (lstitm) => {
            console.log("i am clicked")

            dispatch({ type: "additemtolist", payload: lstitm })
        },
        inputstatusHandler: (inptstatus) => {
            console.log(inptstatus);
            dispatch({ type: "statusinput", payload: inptstatus })
        },
        titleHandlerHandler: (titl) => {
            console.log(titl);
            dispatch({ type: "statustitle", payload: titl })
        }
    }
}

export default connect(mapToprop, mapDispatchtoprop)(Form);