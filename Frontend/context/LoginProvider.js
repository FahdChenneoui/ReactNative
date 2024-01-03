import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  /// to login and sign out 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /// to edit the cusmic drawer Profile
  const [profile, setProfile] = useState({});
  /// edit the Loading icon animation
  const [loginPending, setLoginPending] = useState(false);

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, profile, setProfile,loginPending ,setLoginPending}}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;
