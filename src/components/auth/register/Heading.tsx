"use client";
import React from "react";

const Heading = () => {
  const CancelDrag = (e: React.DragEvent) => {
    e.preventDefault();
  };
  return (
    <div className="heading">
      <div className="signhead" onDragStart={CancelDrag}>
        Sign Up Account
      </div>
      <div className="sign-description" onDragStart={CancelDrag}>
        Enter your personal data to create your account
      </div>
    </div>
  );
};

export default Heading;
