import { createContext, useState, useEffect, useContext } from "react";

const CollegeContext = createContext();

export const CollegeProvider = ({ children }) => {
  const storedCollege = JSON.parse(localStorage.getItem("selectedCollege"));
  
  const [selectedCollege, setSelectedCollege] = useState(storedCollege|| null);

  const selectCollege = (college) => {
    setSelectedCollege(college);
    localStorage.setItem("selectedCollege", JSON.stringify(college)); 
  };

  useEffect(() => {
  }, [selectedCollege]);

  return (
    <CollegeContext.Provider value={{ selectedCollege, selectCollege }}>
      {children}
    </CollegeContext.Provider>
  );
};

export const useCollege = () => {
  return useContext(CollegeContext);
};

export default CollegeContext;
