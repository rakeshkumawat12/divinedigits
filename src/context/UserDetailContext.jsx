import { createContext, useEffect, useState } from "react";
import FormatDate from "../utils/FormatDate";

export const UserDetailContext = createContext();

const UserDetailProvider = ({ children }) => {
  const [date, setDate] = useState("");

  const [mulank, setMulank] = useState();
  const [destiny, setDestiny] = useState();
  const [rajyog, setRajyog] = useState("");

  const handleRajyog = (text) => {
    setRajyog(text);
  };
  const handleMulank = (num) => {
    setMulank(num);
  };

  const handleDestiny = (num) => {
    setDestiny(num);
  };

  const handleAddDate = (date) => {
    setDate(FormatDate(date));
  };

  const updateLocalStorage = (data) => {
    localStorage.setItem("date", JSON.stringify(data));
  };

  useEffect(() => {
    const persistedDate = localStorage.getItem("date");
    if (persistedDate) {
      setDate(JSON.parse(persistedDate));
    }
    console.log(date);
    
  }, []);

  useEffect(() => {
    updateLocalStorage(date);
  }, [date]);

  return (
    <UserDetailContext.Provider
      value={{
        date,
        addDate: handleAddDate,
        addMulank: handleMulank,
        addDestiny: handleDestiny,
        mulank,
        destiny,
        addRajyog: handleRajyog,
        rajyog,
      }}
    >
      {children}
    </UserDetailContext.Provider>
  );
};

export default UserDetailProvider;
