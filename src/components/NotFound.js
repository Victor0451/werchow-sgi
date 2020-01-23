import React from "react";
import { Link } from "react-router-dom";
import ErrorDir from "../img/ErrorDir2.jpg";

export default function NotFound() {
  return (
    <div className="container mt-4">
      <img
        src={ErrorDir}
        style={{
          width: 950,
          height: 600,
          display: "block",
          margin: "auto",
          position: "relative"
        }}
        alt="NotFound"
      />
      <center>
        <Link to="/" className="btn btn-primary mt-4">
          Return to Home Page
        </Link>
      </center>
    </div>
  );
}
