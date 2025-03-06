import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = (response) => {
    const jwt = response.credential;
    localStorage.setItem("token", jwt);
     toast.success("Logged in successfully!");
    navigate("/dashboard");
  };

  const handleFacebookSuccess = (response) => {
    if (response.accessToken) {
      localStorage.setItem("token", response.accessToken);
       toast.success("Logged in successfully!");
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center vh-100">
      <div className="login-card p-4 shadow-lg rounded bg-white text-center">
        <h2 className="mb-4 text-primary">Blog Login</h2>
        <p className="text-muted">Sign in to continue</p>

        <GoogleOAuthProvider clientId="393246415778-5i1ijc3vavq8041hmavhnl8vsgn6b868.apps.googleusercontent.com">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => console.log("Google Login Failed")} />
        </GoogleOAuthProvider>

        <div className="divider my-3">
          <span className="text-muted">OR</span>
        </div>

        <FacebookLogin
          appId="652347930618140"
          onSuccess={handleFacebookSuccess}
          onFail={(error) => console.log("Failed", error)}
          onProfileSuccess={(response) => console.log("Success", response)}
        />
      </div>
    </div>
  );
};

export default Login;
