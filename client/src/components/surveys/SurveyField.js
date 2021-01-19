import React from "react";
import { getFormMeta } from "redux-form";

// surveyField contains logic to render a single label and text input
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      {touched && error}
    </div>
  );
};
