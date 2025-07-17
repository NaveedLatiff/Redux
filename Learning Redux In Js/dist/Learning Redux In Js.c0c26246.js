let state = {
    count: 0,
    name: "Naveed",
    age: 19
};
function reducer(state, action) {
    if (action.type == 'count/increment') return {
        ...state,
        count: state.count + 1
    };
    else if (action.type == 'count/decrement') return {
        ...state,
        count: state.count - 1
    };
    else if (action.type == 'count/decrementBy') return {
        ...state,
        count: state.count - action.payload
    };
    else if (action.type == 'count/incrementBy') return {
        ...state,
        count: state.count + action.payload
    };
    return state;
}
console.log(state);
state = reducer(state, {
    type: 'count/increment'
});
console.log(state);
state = reducer(state, {
    type: 'count/decrement'
});
console.log(state);
state = reducer(state, {
    type: 'count/decrementBy',
    payload: 3
});
console.log(state);
state = reducer(state, {
    type: 'count/incrementBy',
    payload: 10
});
console.log(state);

//# sourceMappingURL=Learning Redux In Js.c0c26246.js.map
