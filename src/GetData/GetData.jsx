import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const GetData = () => {
  const [todos, setTodos] = useState([]);
  
  const fetchPost = async () => {
    await getDocs(collection(db, "todos")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
      console.log(todos, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="todo-content">
      {todos?.map((todo, i) => (
        <p key={i}>{todo.todo}</p>
      ))}
    </div>
  );
};

export default GetData;
