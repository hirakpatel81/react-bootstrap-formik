import React from "react";

const errorStyle = {
  width: "100%",
  marginTop: ".25rem",
  fontSize: "80%",
  color: "#dc3545",
};
function InputError(props) {
  return <div style={errorStyle}>{props.children}</div>;
}

export default InputError;
