import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";



//import Listitems from '../../todolist/src/component/Listitems';

// let status = React.createContext();



// let item = React.createContext();

// let cstatus = React.createContext();

// let deleteitem = React.createContext();


const Form = (props) => {

    const history = useHistory();
  //  let miniform=null;

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
    
        // miniform=(props.titledata.map((val)=>{
        //     return(<>
        //         {props.statusdata.map((vl)=>{
        //             return(<>
        //                 <div style={{zIndex:"10"
                        
        //                 }}>
 
 
        //                     <div style={{color:"white"}}>
        //                         <p>Title:<span style={{fontFamily:"sans-serif"}}>{val}{console.log(val)}</span></p>
        //                         <p>Status:<span style={{fontFamily:"sans-serif"}}>{vl}{console.log(vl)}</span></p>
        //                     </div>
        //                 </div>
        //             </>)
        //         })}
        //     </>)
        // })
        // )
    


    return (<>
        {/* // <item.provider value={listitems}>
        //     <cstatus.Provider value={status}>
        //         <deleteitem.provider value={deleteItemHandler}> */}
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

                {/* <div className="input-group mb-3" > */}

                <input type="text"
                    class="form-control"
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
                    class="form-control"
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
                <textarea type="text" class="form-control"
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
                            //   console.log(lstitm);
                            props.addItemToList(lstitm);
                            history.goBack();
                        }}
                    >
                        <Tooltip title="add to list"><AddIcon />
                        </Tooltip></button>
                </div>

                {/* </div> */}
            
                
                    {/* <status.Provider value={"false"}> */}
                    {/* <Home item={listitems}
                    cstatus={status}
                    deleteitem={deleteItemHandler}
                /> */}
                    {/* </status.Provider> */}
                
            </div>

        </div>

 
{/* 
      
        //         </deleteitem.provider>
        //     </cstatus.Provider>
        // </item.provider> */}

 
   
   
  
        </>
    )
    
}











const mapToprop = (state) => {
    return {
        item: state.items,
        itemlist: state.listitems,
        inputstatus: state.inptstatus,
        ttl: state.title,
        titledata:state.titlearr,
        statusdata:state.statusarr

        
    }
}










const mapDispatchtoprop = (dispatch) => {
    return {
        itemsHandler: (item) => {
            console.log(item);

            dispatch({ type: "itemShowOnInput", payload: item })
            // setitems(event.target.value);
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