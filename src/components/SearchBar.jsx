
import React, { useRef } from "react";

export default function SearchBar() {
  const inputRef = useRef(null);

  return (
    <div style={{ margin: "15px 0" }}>
      <input
        ref={inputRef}
        placeholder="Cliquez sur Focus pour rechercher..."
      />

      <button
        onClick={() => inputRef.current?.focus()}
        style={{ marginLeft: "10px" }}
      >
        Focus
      </button>
    </div>
  );
}
