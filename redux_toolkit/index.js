const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;
const redux = require("redux");
const ActionBindCreators = redux.bindActionCreators;

console.log("Initial State:", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State:", store.getState());
});

const actions = ActionBindCreators(
  {
    cakeOrdered: cakeActions.ordered,
    cakeRestocked: cakeActions.restocked,
    icecreamOrdered: icecreamActions.ordered,
    icecreamRestocked: icecreamActions.restocked,
  },
  store.dispatch
);
store.dispatch(cakeActions.ordered(3));
actions.cakeRestocked(3);
actions.icecreamOrdered(5);
actions.icecreamRestocked(10);

unsubscribe();
