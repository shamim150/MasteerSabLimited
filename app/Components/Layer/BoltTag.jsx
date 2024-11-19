import React from "react";

const BoltTag = ({ text, className }) => {
  return (
    <div>
      <h1 className={`text-xl md:text-4xl lg:text-5xl leading-snug font-bold ${className}`}>
        {text}
      </h1>
    </div>
  );
};

export default BoltTag;
