import { useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa"; 
import { useCourseDataContext } from "../contextsGLOBAL/courseDataContext"; 
import "../styleFiles/sortCourses.css"

export default function SortCourses({ onSortChange }) { // Accept onSortChange prop
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); 
  const { filteredList, setFilteredList } = useCourseDataContext(); 

  const handleSortChange = (event) => {
    const key = event.target.value;
    setSortKey(key);
    onSortChange(key, sortOrder); // Notify parent
  };

  const toggleSortOrder = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    onSortChange(sortKey, newOrder); // Notify parent
  };

  return (
    <div className="sort-bar">
      <label className="sort-by">Sort by:</label>
      <select
        value={sortKey}
        onChange={handleSortChange}
        className="select"
      >
        <option value="">Select...</option>
        <option value="title">Title</option>
        <option value="code">Code</option>
        <option value="instructor">Instructor</option>
        <option value="semester">Semester</option>
        <option value="modality">Modality</option>
        <option value="hours">Hours</option>
      </select>

      <button
        onClick={toggleSortOrder}
        className="order"
      >
        {sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />}
        <span>{sortOrder === "asc" ? "Ascending" : "Descending"}</span>
      </button>
    </div>
  );
}
