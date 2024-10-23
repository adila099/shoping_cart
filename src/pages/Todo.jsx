

import { Input } from "@mui/material";
import React, { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false); // Only true or false to track edit mode
  const [editIndex, setEditIndex] = useState(null); // Track the index of the item being edited

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onClickAdd = () => {
    if (inputValue.trim() !== "") {
      setData([...data, inputValue]);
      setInputValue("");
    } else {
      alert("Please fill the form");
    }
  };

  const onDelete = (indexToDelete) => {
    const updatedData = data.filter((_, index) => index !== indexToDelete);
    setData(updatedData);
  };

  const onEdit = (indexToEdit) => {
    setIsEdit(true);
    setInputValue(data[indexToEdit]);
    setEditIndex(indexToEdit); 
  };

  const onUpdate = () => {
    if (inputValue.trim() !== "") {
      const updatedData = data.map((item, index) =>
        index === editIndex ? inputValue : item
      );
      setData(updatedData);
      setInputValue("");
      setIsEdit(false);
      setEditIndex(null);
    } else {
      alert("Please fill the form");
    }
  };

  return (
    <>
      <div>
        <Input type="text" onChange={onChangeInput} value={inputValue} />
        <button onClick={isEdit ? onUpdate : onClickAdd}>
          {isEdit ? "Update" : "Add"}
        </button>
      </div>

      {/* Table structure */}
      <table
        style={{
          width: "100%",
          marginTop: "20px",
          color: "black",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th>Data list</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>
                <button onClick={() => onEdit(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Todo;
