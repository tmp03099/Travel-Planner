import { useState } from "react";

import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LogInForm";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="h-full rounded-md">
      <h1 className="my-5 text-center cursor-pointer">Auth Page</h1>

      <button onClick={() => setShowLogin(!showLogin)} className="mb-3">
        {showLogin ? "Sign up" : "Sign in"}
      </button>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage;
