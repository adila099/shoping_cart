import {
  ADD_TODO_SUCCESS,
  REMOVE_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
} from "../action/todoAction";

const initialState = {
  todoData: [],
  //   totalCount: 0,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      const newItem = action.payload;
      if (!newItem) {
        alert("Please fill the form");
        return;
      }

      return {
        ...state,
        todoData: [...state.todoData, newItem], // Add new item to the todo array
      };

    case REMOVE_TODO_SUCCESS:
      const itemId = action.payload;
      const updatedData = state.todoData.filter((_, index) => index !== itemId);

      return {
        todoData: updatedData,
      };
    case UPDATE_TODO_SUCCESS:
      const { editIndex, inputValue } = action.payload;

      if (!inputValue.trim()) {
        alert("Please fill the form");
        return state;
      }

      const updatedTodoData = state.todoData.map((item, index) =>
        index === editIndex ? inputValue : item
      );

      return {
        ...state,
        todoData: updatedTodoData,
      };
    default:
      return state;
  }
};

export default todoReducer;
