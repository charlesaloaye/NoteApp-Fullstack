import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("token");

  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/note`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNotes(response.data.notes);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Active User
  useEffect(() => {
    authUser();
  }, []);

  const authUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/user/authenticate`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      login(response.data.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, notes }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
