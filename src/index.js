import { createStore } from "redux";

const reducer = (state=0, action) => {
    switch (action.type) {
        case 'INC':
            return state+1;
        case 'DEC':
            return state-1;
        default:
            return state
    }
}

const anotherReducer = (state=0, action) => {
    switch (action.type) {
        case 'INC':
            return state+10;
        default:
            return state
    }
}

const store = createStore(reducer);

const clickHandler = (id) => {
    document
        .getElementById(id)
        .addEventListener('click', () => {
            store.dispatch({type: id})
        })
}

clickHandler('INC');
clickHandler('DEC');

store.subscribe(() => {
    document.getElementById('counter').innerHTML = store.getState()
})