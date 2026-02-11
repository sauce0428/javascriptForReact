import "./App.css";
import { useRef, useState } from "react";
import Header from "./Header";
import Editor from "./Editor";
import List from "./List";
import Login from "./Login";

const mockData = [
  {
    id: 0,
    content: "공지사항",
    date: new Date().getTime(),
    writer: "admin",
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loginUser"))
  );
  const idRef = useRef(1);

  const onLogin = (loginUser) => {
    setUser(loginUser);
    localStorage.setItem("loginUser", JSON.stringify(loginUser));
  };

  const onLogout = () => {
    setUser(null);
    localStorage.removeItem("loginUser");
  };

  const onCreate = (content) => {
    if (!user) return;

    const newTodo = {
      id: idRef.current++,
      content,
      date: new Date().getTime(),
      writer: user.id,
    };
    setTodos([newTodo, ...todos]);
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (id, newContent) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, content: newContent } : todo
      )
    );
  };

  return (
    <div className="App">
      <Header user={user} onLogout={onLogout} />
      {!user && <Login onLogin={onLogin} />}
      <Editor user={user} onCreate={onCreate} />
      <List todos={todos} user={user} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  );
}

export default App;