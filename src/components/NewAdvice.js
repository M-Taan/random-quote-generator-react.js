import React from "react";

const NewAdvice = ({ changeAdvice }) => {
  return (
    <button className="button" onClick={changeAdvice}>
      <span>Give Me Advive</span>
    </button>
  );
};

export default NewAdvice;
