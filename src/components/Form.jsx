import React from "react";
import { useDispatch } from "react-redux";
import { addUser, clearUser } from "../redux/userSlice";
export const Form = () => {
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(addUser(e.target.value));
  } 

  function handleClear() {
    dispatch(clearUser());
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter name here..."
          onChange={handleChange}
        />
      </form>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};
