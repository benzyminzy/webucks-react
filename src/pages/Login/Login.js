
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <h1 className="login__title">WeBucks</h1>
      <div className="login__form">
        <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" className="login__form__id"/>
        <input type="password" placeholder="비밀번호" className="login__form__pw"/>
        <button disabled='disabled' type='button' className="login__form__btn">로그인</button>
      </div>
      <div className="login__findPW">비밀번호를 잊으셨나요?</div>
    </div> 
  )
}

export default Login;
