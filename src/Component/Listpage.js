import React, { useRef, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import Listitems from "../Homecomponent/Listitems";
import LpageStyle from "../assets/styles/Listpage.module.css";
import Lpageimg from "../assets/images/Lpageimg.jpg";
import { TweenMax } from "gsap";

const Home = (props) => {
  let listitems = null;
  let lpComp = useRef(null);
  let imgDiv = useRef(null);
  useEffect(() => {
    TweenMax.from(imgDiv, 1, {
      x: -500,
      rotate: 360,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
    TweenMax.from(lpComp, 1, { y: -1000, duration: 1, delay: 0.3 });
  });
  if (props.cstatus) {
    listitems = props.listitem.map((val, index) => {
      return (
        <Listitems
          key={index}
          Litem={val}
          onClicked={() => {
            let Ntitle = [...props.titledata];
            let Nstatus = [...props.statusdata];
            Ntitle.splice(index, 1);
            Nstatus.splice(index, 1);

            let olditem = [...props.listitem];
            olditem.splice(index, 1);
            let Ndata = {
              title: [...Ntitle],
              status: [...Nstatus],
              Litem: [...olditem],
            };

            props.deleteitem(Ndata);
          }}
        ></Listitems>
      );
    });
  }

  return (
    <>
      <div
        className={LpageStyle.ext_div}
        ref={(el) => {
          lpComp = el;
        }}
      >
        <div
          ref={(el) => {
            imgDiv = el;
          }}
        >
          <img className={LpageStyle.Lpimg} src={Lpageimg} alt="loading..." />
        </div>

        <div className={LpageStyle.centerstyle}>
          <h1 className={LpageStyle.heading}>
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
          <ol>{listitems}</ol>
        </div>
      </div>
    </>
  );
};

const mapStateToProp = (state) => {
  return {
    cstatus: state.data.status,
    listitem: state.data.listitems,
    titledata: state.data.titlearr,
    statusdata: state.data.statusarr,
  };
};
const mapdispatchtoprop = (dispatch) => {
  return {
    deleteitem: (Ndata) => {
      dispatch({ type: "dltitm", payload: Ndata });
    },
  };
};
export default connect(mapStateToProp, mapdispatchtoprop)(Home);
