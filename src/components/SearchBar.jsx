import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../searchBar.css';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && query.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
    else if (event.key === "Enter" && query.trim() === "") {
      navigate("/search");
    }
  };

  const handleResetSearchbar = () => {
    setQuery(""); // Clear input field
    onSearch(""); // Notify parent that search is cleared
    navigate("/search"); // Reset URL
  };

  return (
    <div className="search-box">
      <input className="search-prompt"
        type="text"
        placeholder="Search courses by name or course code"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // ⬅️ Navigate only on Enter
      />
      <button className="reset-search" onClick={handleResetSearchbar}>
        X
      </button>
    </div>
  );
}