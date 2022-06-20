export const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER": //if we send this action type, what are we going to do? we are going to set the state to the action.payload
      return action.payload; //we want this function update the state whatever we are passing in. {type: "LOGGED_IN_USER", payload: user}. we acces to the payload using action.payload. Payload will contain user information
    case "LOGGED_OUT_USER":
      return action.payload; //user will be null.{type: "LOGGED_OUT_USER", payload: null}
    default:
      return state;
  }
};
