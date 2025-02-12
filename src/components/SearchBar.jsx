import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  };

  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <input
        type="text"
        placeholder="Search courses by name, code, or professor"
        style={{
          width: "60%",
          padding: "15px",
          borderRadius: "30px",
          border: "1px solid #ccc",
          fontSize: "18px",
          textAlign: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          margin: "20px",
        }}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // ⬅️ Navigate only on Enter
      />
    </div>
  );
}
