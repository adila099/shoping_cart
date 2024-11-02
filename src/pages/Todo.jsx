import { Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addRequestSuccess,
  removeRequestSuccess,
  updateTodoSuccess,
} from "../redux/action/todoAction";

const Todo = () => {
  const dispatch = useDispatch();
  const { todoData } = useSelector((state) => state.todo);

  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false); // Only true or false to track edit mode
  const [editIndex, setEditIndex] = useState(null); // Track the index of the item being edited

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onClickAdd = () => {
    dispatch(addRequestSuccess(inputValue));
    setInputValue("");
    console.log(todoData, "dataaaa");
    setData(todoData);
    // if (inputValue.trim() !== "") {
    //   setData([...data, inputValue]);

    // } else {
    //   alert("Please fill the form");
    // }
  };

  const onDelete = (indexToDelete) => {
    dispatch(removeRequestSuccess(indexToDelete));
    // const updatedData = data.filter((_, index) => index !== indexToDelete);
    // setData(updatedData);
  };

  const onEdit = (indexToEdit) => {
    setEditIndex(indexToEdit);
    setIsEdit(true);
    setInputValue(todoData[indexToEdit]);
  };

  const onUpdate = () => {
    if (editIndex !== null) {
      dispatch(updateTodoSuccess(editIndex, inputValue));
      setInputValue("");
      setIsEdit(false);
      setEditIndex(null);
    } else {
      console.log("editIndex is null");
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
          {todoData?.map((item, index) => (
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
