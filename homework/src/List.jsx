import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, user, onDelete, onUpdate }) => {
  return (
    <div className="List">
      <h4>게시글 목록</h4>
      <div className="todos_wrapper">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            user={user}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default List;