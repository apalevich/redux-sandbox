import React from "react";
import { createRoot } from "react-dom/client";

import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from './actions';
import Counter from "./counter";

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const root = createRoot(document.getElementById('root'));

const update = () => {
    root.render(<Counter 
        counter={store.getState()}
        inc={inc}
        dec={dec}
        rnd={() => {
            const value = Math.ceil(Math.random() * 10);
            return rnd(value);
        }}/>)
}

update();
store.subscribe(update);

