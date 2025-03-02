import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = (response) => {
    const jwt = response.credential;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  };

  const handleFacebookSuccess = (response) => {
    if (response.accessToken) {
      localStorage.setItem("token", response.accessToken);
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center vh-100">
      <div className="login-card p-4 shadow-lg rounded bg-white text-center">
        <h2 className="mb-4 text-primary">Blog Login</h2>
        <p className="text-muted">Sign in to continue</p>

        {/* Google Login */}
        <GoogleOAuthProvider clientId="463448446742-lenlnqf98q4oqogljq33nscbcsc0n6pm.apps.googleusercontent.com">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => console.log("Google Login Failed")} />
        </GoogleOAuthProvider>

        <div className="divider my-3">
          <span className="text-muted">OR</span>
        </div>

        {/* Facebook Login */}
        <FacebookLogin
          appId="652347930618140"
          onSuccess={handleFacebookSuccess}
          onFail={(error) => console.log("Facebook Login Failed:", error)}
          onProfileSuccess={(response) => console.log("Profile Success:", response)}
        />
      </div>
    </div>
  );
};

export default Login;
