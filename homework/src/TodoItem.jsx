import { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, content, date, writer, user, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);

  const handleEditClick = () => {
    if (user && user.id === writer) {
      setIsEditing(true);
    }
  };

  const handleEditSubmit = () => {
    if (!editContent.trim()) return;
    onUpdate(id, editContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditContent(content);
    setIsEditing(false);
  };

  return (
    <div className="TodoItem">
      <div className="content">
        {isEditing ? (
          <input
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
        ) : (
          <span>{content}</span>
        )}
      </div>

      <div className="date">{new Date(date).toLocaleDateString()}</div>

      {user && user.id === writer && (
        <div className="actions">
          {isEditing ? (
            <>
              <button className="save-btn" onClick={handleEditSubmit}>
                완료
              </button>
              <button className="cancel-btn" onClick={handleCancel}>
                취소
              </button>
            </>
          ) : (
            <>
              <button className="edit-btn" onClick={handleEditClick}>
                수정
              </button>
              <button className="delete-btn" onClick={() => onDelete(id)}>
                삭제
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoItem;