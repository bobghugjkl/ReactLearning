import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducer } from 'redux';
import { Provider } from 'react';
const f1 = (state = 0, action) => {
  switch (action.type) {
    case 'add':
      return state + action.value;
    case 'sub':
      return state - action.value;
    default:
      return state;
  }
};
const f2 = (state = "", action) => {
  switch (action.type) {
    case 'concat':
      return state + action.character;
    default:
      return state;
  }
}
const f3 = (state = {}, action) => {
  return {
    f1: f1(state.f1,action),
    f2: f2(state.f2,action),
  }
}

const store = configureStore({
  reducer: f3,
});
store.subscribe(() => {
  console.log(store.getState())
});
store.dispatch({ type: "add",value: 1 });
store.dispatch({ type: "concat", character: "yxc" });

console.log(store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
  </React.StrictMode>
);

