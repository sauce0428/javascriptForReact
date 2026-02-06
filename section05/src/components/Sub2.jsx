const Sub2 = ({ user }) => {
  return (
    <>
      {user.isLogin ? (
        <div>{user.name} 로그인</div>
      ) : (
        <div>{user.name} 로그아웃</div>
      )}
    </>
  );
};

export default Sub2;