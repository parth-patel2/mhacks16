import React from "react";
import PropTypes from "prop-types";

export default function AssistantSearchBar({ text, handleTextChange }) {
  return (
    <div>
      <input type="text" placeholder="What kind of trip are you looking for?" value={text} onChange={handleTextChange} />
    </div>
  );
}
