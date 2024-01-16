import React, { useState } from "react";
import "./AddData.css";
import { db } from "../firebase/firebase";
import GetData from "../GetData/GetData";
import { collection, addDoc } from "firebase/firestore";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">Todo-App</h1>

        <div>
          <div>
            <input
              type="text"
              placeholder="What do you have to do today?"
              onChange={(e) => setTodo(e.target.value)}
            />
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button type="submit" className="btn" onClick={addTodo}>
              Submit
            </button>
          </div>
        </div>

        <div className="todo-content">
          <h1>Show Data</h1>
          <GetData />
        </div>
      </div>
    </section>
  );
};

export default Todo;
