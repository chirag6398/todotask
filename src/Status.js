import React from "react";
import { connect } from "react-redux"

const Status = (props) => {
    let mf = null;
    mf = (props.titledata.map((val) => {
        return (<>
            {props.statusdata.map((vl) => {
                return (<>
                    <div style={{


                    }}>


                        <div style={{ color: "black", position: "absolute", top: "20%", width:"auto"}}>
                            
                                <li>
                                    <p style={{ fontSize: "1vw" }}>Title:<span style={{ fontFamily: "sans-serif", fontSize: "2vw" }}>{val}{console.log(val)}</span></p>
                                    <p style={{ fontSize: "1vw" }}>Status:<span style={{ fontFamily: "sans-serif", fontSize: "2vw" }}>{vl}{console.log(vl)}</span></p>
                                </li>
                            
                        </div>
                    </div>
                </>)
            })
            }


        </>)
    })
    )



    return (<>
        <div style={{display:"flex",
        justifyContent:"center",
        alignItems:"center"
        }}>
         <ol>{mf}</ol>
            
        </div>

    </>);


}





const mapToprop = (state) => {
    return {

        titledata: state.titlearr,
        statusdata: state.statusarr


    }
}
export default connect(mapToprop)(Status);
