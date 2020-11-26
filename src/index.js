import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,combineReducers} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducer from "./Statemanagement/reducer";

const ComReducer=combineReducers({
  data:reducer,
})
const store=createStore(ComReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
