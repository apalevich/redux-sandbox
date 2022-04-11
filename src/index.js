import { createStore } from "redux";
import reducer from "./reducer";
import { inc, dec, rnd } from './actions';

const store = createStore(reducer);

document
    .getElementById('INC')
    .addEventListener('click', () => {
        store.dispatch(inc())
    })
document
    .getElementById('DEC')
    .addEventListener('click', () => {
        store.dispatch(dec())
    })
document
    .getElementById('RND')
    .addEventListener('click', () => {
        store.dispatch(rnd(Math.ceil(Math.random()*10)))
    })

store.subscribe(() => {
    document.getElementById('counter').innerHTML = store.getState()
})