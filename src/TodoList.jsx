import React from "react";
import Todo from "./todo";

// (props)と書かなくても{}でJASを囲って({todos})でオッケー
const TodoList = ({todos, toggleTodo}) => {
  // mapは1ずつ渡すという事
  // todoが２つあって見分けるためにkeyを付ける
  // key={todo}の書き方はあまりよくない
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>);
};

export default TodoList;
