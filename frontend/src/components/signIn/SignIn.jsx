import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialEmail = location.state?.email || "";

  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormDate] = useState({
    email: initialEmail,
    password: "",
    confirmPassword: "",
    name: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please Fill all Feilds.");
      return;
    }
    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        setError("Password not Match Try Again.");
        return;
      }

      if (!formData.name) {
        setError("Enter your NAame");
        return;
      }

      //simulate success
      setSuccess(true);
      setTimeout(() => {
        setIsSignUp(false);
        setSuccess(false);
        setError("");
      }, 2000);
    } else {
      // Simulate login
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };


  return (
    <div className="bg-slate-950 text-white min-h-screen pt-16 pb-16 font-sans items-center justify-center">
      <div className="w-full max-w-md px-4 sm:px-6">
        <div className="bg-slate-900/50 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-slate-800/40 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight">
                {isSignUp ? "Sign Up to" : "Sign In to"}{" "}
                <span className="text-orange-500">ANIFLIX</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
