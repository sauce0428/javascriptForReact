import { useRef, useState } from "react";
import "./Editor.css";

const Editor = ({ user, onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  if (!user) {
    return (
  <div className="login-guide">
    ✨ 로그인 후 게시글을 작성할 수 있습니다.
  </div>
);
  }

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새 글 작성"
      />
      <button onClick={onSubmit}>등록</button>
    </div>
  );
};

export default Editor;