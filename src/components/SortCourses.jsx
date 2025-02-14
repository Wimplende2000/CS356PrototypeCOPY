import { useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa"; // Install with `npm install react-icons`

export default function SortCourses({ onSort }) {
  const [sortKey, setSortKey] = useState(""); 
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"

  const handleSortChange = (event) => {
    const key = event.target.value;
    setSortKey(key);
    onSort(key, sortOrder);
  };

  const toggleSortOrder = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    onSort(sortKey, newOrder);
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-white shadow-md rounded-md">
      <label className="text-gray-700 font-medium">Sort by:</label>
      <select
        value={sortKey}
        onChange={handleSortChange}
        className="border border-gray-300 p-2 rounded-md outline-none"
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
        className="p-2 bg-blue-500 text-white rounded-md flex items-center gap-2 hover:bg-blue-600 transition"
      >
        {sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />}
        <span>{sortOrder === "asc" ? "Ascending" : "Descending"}</span>
      </button>
    </div>
  );
}
