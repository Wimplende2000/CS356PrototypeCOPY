import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styleFiles/searchBar.css";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);
  const [isInputFocused, setInputFocused] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleSearch = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery === "") {
      navigate("/search");
      return;
    }
    // Remove duplicate (ignoring case) then add the current query at the top
    setHistory((prevHistory) => {
      const filteredHistory = prevHistory.filter(
        (item) => item.toLowerCase() !== trimmedQuery.toLowerCase()
      );
      return [trimmedQuery, ...filteredHistory];
    });
    navigate(`/?q=${encodeURIComponent(trimmedQuery)}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleResetSearchbar = () => {
    setQuery("");
    onSearch("");
  };

  const handleHistoryClick = (item) => {
    setQuery(item);
    onSearch(item);
    navigate(`/?q=${encodeURIComponent(item)}`);
  };

  const deleteHistoryItem = (index) => {
    setHistory((prevHistory) => {
      const newHistory = [...prevHistory];
      newHistory.splice(index, 1);
      return newHistory;
    });
  };

  return (
      <div className="search-box-wrapper">
        <div className="search-box">
          <input
            className="search-prompt"
            type="text"
            placeholder="Search courses by name or course code"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
          <button className="reset-search" onClick={handleResetSearchbar}>
            X
          </button>
        </div>
        {isInputFocused && history.length > 0 && (
          <div className="search-history">
            {history.map((item, index) => (
              <div
                key={index}
                className="search-history-item"
                onMouseDown={() => handleHistoryClick(item)}
              >
                <span>{item}</span>
                <span
                  className="delete-history-item"
                  onMouseDown={(e) => {
                    e.preventDefault(); // Prevents input from losing focus
                    e.stopPropagation();
                    deleteHistoryItem(index);
                  }}
                >
                  &#x2715;
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
  );
}
