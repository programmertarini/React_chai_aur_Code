import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todod msg",
      complated: false,
    },
  ],
  addTodo:(todo)=>{},
  updateTodo:(id , todo)=>{},
  toggleTodo:(id)=>{},
  deleteTodo:(id)=>{}
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = TodoContext.Provider;
