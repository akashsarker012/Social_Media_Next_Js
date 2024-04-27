"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextData = createContext(null);
export const Providers = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchCurrentUser = async () => {
    const response = await axios.get("/api/current-user");
    console.log(response.data.data, "response");
    setUser(response.data.data);
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);
  return (
    <ContextData.Provider value={{ user, fetchCurrentUser }}>
      {children}
    </ContextData.Provider>
  );
};
