"use client";
import React from "react";

type HeadingProps = {
  title: string;
  description: string;
  className?: string;
};
const Heading = ({ title, description, className }: HeadingProps) => {
  const CancelDrag = (e: React.DragEvent) => {
    e.preventDefault();
  };
  return (
    <div className={`heading ${className}`}>
      <div className="signhead" onDragStart={CancelDrag}>
        {title}
      </div>
      <div className="sign-description" onDragStart={CancelDrag}>
        {description}
      </div>
    </div>
  );
};

export default Heading;
