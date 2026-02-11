import "./Header.css";

const Header = ({ user, onLogout }) => {
  return (
    <div className="Header">
      <h1>📋 학생 게시판</h1>
      {user && (
        <>
          <span>{user.id}님</span>
          <button onClick={onLogout}>로그아웃</button>
        </>
      )}
    </div>
  );
};

export default Header;