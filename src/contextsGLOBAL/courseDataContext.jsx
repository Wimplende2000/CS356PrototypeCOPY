import { createContext, useContext, useState, useEffect } from "react";
import coursesData from "../contextsGLOBAL/courseData"; // Assuming this imports your data

const courseDataContextContext = createContext();
export const CourseDataContext = ({ children }) => {
 const [filteredList, setFilteredList] = useState([]);
 useEffect(() => {
  // Load data from coursesData and initialize filteredList
  if (coursesData && Array.isArray(coursesData)) {
   // Create a copy of coursesData to initialize filteredList
   setFilteredList([...coursesData]);
  } else {
   console.warn("coursesData is not an array or is undefined. Check your data source.");
   // Optionally initialize with an empty array or handle the error differently
   setFilteredList([]);
  }
 }, []); // useEffect runs once on component mount to initialize data

 //start of return
 return (
  <courseDataContextContext.Provider value={{
        filteredList, // This will be an array of course objects
        setFilteredList
      }}>
   {children}
  </courseDataContextContext.Provider>
 );
 //end of return

};

export const useCourseDataContext = () => useContext(courseDataContextContext);