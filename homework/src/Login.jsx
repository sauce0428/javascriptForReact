import { useState } from "react";

const Login = ({ onLogin }) => {
  const [isJoin, setIsJoin] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 회원 목록
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const submit = () => {
    if (!id || !pw) {
      alert("모든 값을 입력하세요");
      return;
    }

    // 회원가입
    if (isJoin) {
      if (users.find((u) => u.id === id)) {
        alert("이미 존재하는 아이디입니다");
        return;
      }

      const newUser = { id, pw };
      localStorage.setItem(
        "users",
        JSON.stringify([...users, newUser])
      );

      alert("회원가입 완료");
      setIsJoin(false);
      setPw("");
      return;
    }

    // 로그인
    const user = users.find(
      (u) => u.id === id && u.pw === pw
    );

    if (!user) {
      alert("아이디 또는 비밀번호가 틀립니다");
      return;
    }

    onLogin(user);
  };

  return (
    <div>
      <h3>{isJoin ? "회원가입" : "로그인"}</h3>

      <input
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <input
        type="password"
        placeholder="비밀번호"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />

      <button onClick={submit}>
        {isJoin ? "회원가입" : "로그인"}
      </button>

      <p
        style={{ cursor: "pointer", color: "blue" }}
        onClick={() => setIsJoin(!isJoin)}
      >
        {isJoin
          ? "이미 계정이 있으신가요? 로그인"
          : "회원가입 하기"}
      </p>
    </div>
  );
};

export default Login;