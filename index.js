const redux = require("redux")

//Obj with type property whos value its a stringdescribings the change you want to make into state
function increment() {
    return {
        type: "INCREMENT"
    }
}

function decrement() {
    return {
        type: "DECREMENT"
    }
}


//Reducer are functions its job is to return new state
/*
Retorning state based i ncoming action

*/
function reducer(state={count: 0}, action) {

   // return new state based on the incoming action.type
   switch(action.type) {
    case "INCREMENT":
        return {
            count: state.count + 1
        }
    case "DECREMENT":
        return {
            count: state.count - 1
        }
    }
}