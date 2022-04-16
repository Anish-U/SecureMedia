import { createContext, useReducer } from "react";

import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "6259405f30459a0e6794b8c4",
    username: "anish",
    email: "anish@mail.com",
    password: "$2b$12$Cd4SY1msBpDP.PBqBWsb7uH5kTxHenupPv3.m6NkkpoyIJaDyZrvu",
    profilePicture: "images/avatars/male/male4.png",
    followers: ["62593f9c30459a0e6794b8bf"],
    followings: ["62593f9c30459a0e6794b8bf"],
    isAdmin: false,
    createdAt: { $date: { $numberLong: "1650016351360" } },
    updatedAt: { $date: { $numberLong: "1650051532568" } },
    __v: 0,
    gender: "Male",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
