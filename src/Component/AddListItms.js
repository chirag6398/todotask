import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Statusf from "./Status";
import AddStyle from "../assets/styles/Addlistpage.module.css";
import Alpimg from "../assets/images/AddlistPage.jpg";

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
        <div className={AddStyle.ext_div} >
        <img className={AddStyle.ALPimg} src={Alpimg} alt="loading..."/>
            <div className="form-group" >
                <div className={AddStyle.center_div}>
                    <h1 className={AddStyle.heading} >Todolist</h1>


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
                    </div>
                    <button type="button"
                        className="btn btn-outline-success btn-sm "
                        style={{
                            borderRadius: "100px",
                            boxShadow: "1px 1px 1px 1px ",
                            float: "right",
                            marginRight: "2vw",
                        }}
                        onClick={() => {

                            let lstitm = props.item;
                            {
                                if (lstitm !== "") {
                                    props.addItemToList(lstitm);
                                    history.goBack();
                                }
                                else
                                    alert(`Opps you have to add item`);
                            }

                        }}
                    >
                        <Tooltip title="add to list"><AddIcon />
                        </Tooltip></button>

                </div>



                {Formstatus}
            </div>
        </div>
    </>
    )
}

const mapToprop = (state) => {
    return {
        cstatus: state.data.status,
        item: state.data.items,
        itemlist: state.data.listitems,
        inputstatus: state.data.inptstatus,
        ttl: state.data.title,
        titledata: state.data.titlearr,
        statusdata: state.data.statusarr


    }
}
const mapDispatchtoprop = (dispatch) => {
    return {
        itemsHandler: (item) => {

            dispatch({ type: "itemShowOnInput", payload: item })
        },
        addItemToList: (lstitm) => {


            dispatch({ type: "additemtolist", payload: lstitm })
        },
        inputstatusHandler: (inptstatus) => {

            dispatch({ type: "statusinput", payload: inptstatus })
        },
        titleHandlerHandler: (titl) => {
            dispatch({ type: "statustitle", payload: titl })
        }
    }
}

export default connect(mapToprop, mapDispatchtoprop)(Form);