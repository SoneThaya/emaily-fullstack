import React from "react";

// surveyField contains logic to render a single label and text input
export default ({ input, label }) => {
  console.log(input);
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
