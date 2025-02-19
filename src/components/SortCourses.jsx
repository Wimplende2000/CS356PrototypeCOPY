import { useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa"; 
import { useCourseDataContext } from "../contextsGLOBAL/courseDataContext"; 
import "../sortCourses.css"

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
    <div style={{ display: "flex", justifyContent: "end", alignItems: "center", marginBottom: "10px", gap:"5px" }}>
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
