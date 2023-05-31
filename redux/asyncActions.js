const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const INITIAL_STATE = {
  loading: false,
  users: [],
  error: "",
};

const actions = {
  FETCH_USERS_REQUESTED: "FETCH_USERS_REQUESTED",
  FETCH_USERS_SUCCEEDED: "FETCH_USERS_SUCCEEDED",
  FETCH_USERS_FAILED: "FETCH_USERS_FAILED",
};

const fetchUsersRequest = () => {
  return {
    type: actions.FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: actions.FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailed = (error) => {
  return {
    type: actions.FETCH_USERS_FAILED,
    payload: error,
  };
};

const fetchUsers = () => {
  return async function (dispatch) {
    dispatch(fetchUsersRequest());
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const dataa = await response.data;
      const users = dataa.map((user) => user.id);
      dispatch(fetchUsersSuccess(users));
    } catch (error) {
      dispatch(fetchUsersFailed(error.response.statusText));
    }
  };
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case actions.FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case actions.FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
