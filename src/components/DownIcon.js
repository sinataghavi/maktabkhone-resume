import React, { Component } from "react";

const DownIcon = (props) => {
  return (
    <div
    onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "-34px",
        transform: "translateY(-45px)"
      }}
    >
      <div
        style={{
          maxWidth: "30px",
              margin: "auto",
          width: "50%"
        }}
      >
        <img src={props.icon} />
      </div>
    </div>
  );
};
export default DownIcon