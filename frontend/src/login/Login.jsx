import Header from "./Header";
import "./Login.css";

function Login() {
  return (
    <div>
      <Header />

      <main className="container">
        <div className="sign-in-container">
          <h1>Enter your info to sign in</h1>
          <p>Or get started with new account.</p>
          <input
            type="text"
            className="log-input"
            placeholder="Email or mobile number"
          />
          <button className="con-btn">Continue</button>
          <p className="help">Get Help▽</p>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;
