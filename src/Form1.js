import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import {useHistory} from "react-router-dom";



//import Listitems from '../../todolist/src/component/Listitems';

// let status = React.createContext();



// let item = React.createContext();

// let cstatus = React.createContext();

// let deleteitem = React.createContext();


const Form = (props) => {

    const history=useHistory();

    // let [items, setitems] = useState("");
    // let [listitems, setlistitems] = useState([]);
    // let [status, setStatus] = useState(false);





    // const itemsHandler = (event) => {
    //     setitems(event.target.value);

    // }
    // const additemstolist = () => {
    //     setlistitems((prevstate) => {
    //         return [...prevstate, items];

    //     });
        // status = true;
    //     setStatus(true)
    //     setitems("");
    // }
    // const deleteItemHandler = (event) => {

    //     setlistitems((prevstate) => {
    //         let olditems = [...prevstate];
    //         olditems.splice(event, 1);
    //         return [...olditems]

    //     })

    // }
    return (
        // <item.provider value={listitems}>
        //     <cstatus.Provider value={status}>
        //         <deleteitem.provider value={deleteItemHandler}>
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
                width: "40%",
                height: "70%",
                backgroundImage: "url(C:\Users\Cinni\Desktop\notebook.jpg) ",
                borderRadius: "20px",
                boxShadow: "1px 2px 0px 2px gray",
                textAlign: "center"
            }}>

                <h1 style={{
                    letterSpacing: "4px",
                    color:"whitesmoke"

                }}>Todolist</h1>
                <hr></hr>

                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <button type="button"
                            className="btn btn-outline-success btn-sm"
                           onClick={()=>{

                               let lstitm=props.item;
                            //   console.log(lstitm);
                               props.addItemToList(lstitm);
                               history.goBack();}}
                            >
                            <Tooltip title="add to list"><AddIcon />
                            </Tooltip></button>
                    </div>
                    <input type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="add items to list"
                        value={props.item}
                       onChange={(event)=>{
                           let item=event.target.value;
                           
                           props.itemsHandler(item)}}
                    />
                </div>
                <br />
                <ol>
                    {/* <status.Provider value={"false"}> */}
                    {/* <Home item={listitems}
                    cstatus={status}
                    deleteitem={deleteItemHandler}
                /> */}
                    {/* </status.Provider> */}
                </ol>
            </div>
        </div>
        //         </deleteitem.provider>
        //     </cstatus.Provider>
        // </item.provider>
    )
}

const mapToprop = (state) => {
    return {
        item:state.items,
        itemlist:state.listitems

    }
}

const mapDispatchtoprop = (dispatch) => {
    return {
        itemsHandler: (item) => {
            console.log(item);
           
            dispatch({ type: "itemShowOnInput", payload: item })
            // setitems(event.target.value);
        },
        addItemToList:(lstitm)=>{
            console.log("i am clicked")
            dispatch({type:"additemtolist",payload:lstitm})
        }
        // deleteItemHandler : (event) => {
            
        //     dispatch({type:"deleteitem",payload:event})

        //     // setlistitems((prevstate) => {
        //     //     let olditems = [...prevstate];
        //     //     olditems.splice(event, 1);
        //     //     return [...olditems]
    
        //     // })
    
        // }
    }
}
//export {item,cstatus,deleteitem};
export default connect(mapToprop, mapDispatchtoprop)(Form);