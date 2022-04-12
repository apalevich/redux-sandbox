import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document
    .getElementById('inc')
    .addEventListener('click', inc)
document
    .getElementById('dec')
    .addEventListener('click', dec)
document
    .getElementById('rnd')
    .addEventListener('click', () => {
        const val = Math.ceil(Math.random()*10);
        rnd(val);
    })

store.subscribe(() => {
    document.getElementById('counter').innerHTML = store.getState()
})