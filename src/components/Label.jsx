import React from "react";
import { useSelector } from "react-redux";
export const Label = () => {
  const name = useSelector((state) => state.user.username);
  return (
    <div>
      <span>{name}</span>
    </div>
  );
};
