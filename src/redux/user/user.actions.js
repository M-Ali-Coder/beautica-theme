import setCurrentUser from "./user.types";

export const setCurrentUser = (user) => ({
  type: setCurrentUser,
  payload: user,
});
