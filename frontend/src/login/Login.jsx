import Header from "./Header";
import "./Login.css";

function Login() {
  return (
    <div>
      <Header />

      <main className="container">
        <div className="sign-in-container">
          <h1>Enter your info to sign in</h1>
          <p className="info">Or get started with a new account.</p>
          <input
            type="email"
            className="log-input"
            placeholder="Email or mobile number"
          />
          <button className="con-btn">Continue</button>
          <p className="help">Get Help</p>
          <p className="info2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </main>

      <footer>
        <div className="contact">
          <span>Questions? Call</span>
          <a href="#">000-800-919-1743 (Toll-Free)</a>
        </div>

        <ul className="links">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Help Centre</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Cookie Preferences</a></li>
          <li><a href="#">Corporate Information</a></li>
        </ul>

        <select name="Language">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </footer>
    </div>
  );
}

export default Login;
