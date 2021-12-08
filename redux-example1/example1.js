const redux = require("redux")
const createStore = redux.createStore

/*  action */

//consatnt
const BUY_CAKE = "BUY_CAKE"

// action: object with type property
// {
//   type: BUY_CAKE,
//   info: "First Redux action"
// }

//action creater; function that returns an action
function buyCake() {
    return {
        type: BUY_CAKE,
      }  
}

/* reducers */

// pure function [input]{previousState, action}=>[output]newState

// previousState: state of object represented by single object

const initialState = {
  numberOfCakes: 10
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: 
      return {
        ...state,
        numberOfCakes: state.numberOfCakes-1
      }
    default: return state
  }
}

/* store */

//1.holds application state

const store = createStore(reducer)

//2.get state: gives current state

console.log("initialState ",store.getState())

//4.allow app to subscribe changes in to store - anytime state updates subscribe() is called
//5.unsubscribe store: calling the function returned by subscribe method


/*5*/const unsubscribe = /*4*/store.subscribe(()=>console.log("updated state", store.getState()))

//3.dispatch method to update the state

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

/*5*/
unsubscribe()