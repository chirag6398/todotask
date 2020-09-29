import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Status from "./Status"


// import DeleteIcon from '@material-ui/icons/Delete';

// import AddIcon from '@material-ui/icons/Add';
// import Tooltip from '@material-ui/core/Tooltip';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Listitems from "./Listitems";


export default function Routing() {
    return (
        <div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/form">
                    <Form />
                </Route>
                {/* <Route exact path="/status">
                    <Status/>
                </Route> */}
            </Switch>
        </div>
    )
}

// function Home() {
//     return (<>
//         <div style={{
//             display: "flex",
//             justifyContent: "center",
//             width: "100%",
//             height: "100%",
//             zIndex: "0",
//             backgroundColor: "black",
//             // backgroundImage:"url('https://unsplash.com/photos/2Kqhw3qST0o/download?force=true') "
//         }}>
//             <div className="center_div">
//                 <h1 style={{ color: "white" ,width:"100%",height:"100%",letterSpacing:"4px"}}>Todolist</h1>
                
//             </div>
//         </div>
//     </>)

// }

// function Form() {
//     return <h1>I am in form page</h1>

// }

// function Todolist() {
//     let [items, setitems] = useState("");
//     let [listitems, setlistitems] = useState([]);




//     const itemsHandler = (event) => {
//         setitems(event.target.value);

//     }
//     const additemstolist = () => {
//         setlistitems((prevstate) => {
//             return [...prevstate, items];

//         });
//         setitems("");
//     }
//     const deleteItemHandler = (event) => {

//         setlistitems((prevstate)=>{
//             let olditems=[...prevstate];
//             olditems.splice(event,1);
//             return [...olditems]

//         })

//     }
//     return (
//         <div>
//             <h1 style={{ textAlign: "center", letterSpacing: "3px", position: "relative", top: "3vh" }}>Todolist</h1>
//             <br></br>

//             <div className="input-group mb-3">
//                 <div className="input-group-prepend">
//                     <button type="button" 
//                     className="btn btn-outline-success btn-sm" 
//                     onClick={additemstolist}> 
//                      <Tooltip title="add to list"><AddIcon />
//                      </Tooltip></button>
//                 </div>
//                 <input type="text"
//                     class="form-control"
//                     aria-label="Sizing example input"
//                     aria-describedby="inputGroup-sizing-default"
//                     placeholder="add items to list"
//                     value={items}
//                     onChange={itemsHandler}
//                 />
//             </div>
//             <br />


//         </div>
//     )
// }





// function Listitems() {

//     return (<>
//     <ol>



//         {
//             listitems.map((val, index) => {
//                 return (<>
//                     <li
//                         style={{ listStyle: "none" }}>
//                         <button
//                             type="button"
//                             className="btn btn-outline-danger btn-sm  "
//                             style={{
//                                 marginRight: "9px",
//                                 marginBottom: "4px"
//                             }}
//                             onClick={deleteItemHandler}
//                         >  <Tooltip title="remove item from list"><DeleteIcon /></Tooltip>
//                         </button>
//                         {val}
//                     </li>

//                 </>)
//             })
//         }

//     </ol>
//     </>);
// }