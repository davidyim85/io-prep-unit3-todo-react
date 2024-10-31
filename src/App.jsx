import NavBar from "./components/NavBar"
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import SignUp from "./components/SignUp";
import { signout } from "./services/authService";
import SignIn from "./components/SignIn";
import { getUser } from './services/authService';
import Todo
  from "./components/Todo";
function App() {
  const [user, setUser] = useState(getUser());


  const handleSignout = () => {
    signout();
    setUser(null);
  };


  return (
    <>
      <NavBar user={user} handleSignout={handleSignout} />

      <Routes>
        {user ? (

          <Route path="/" element={<Todo />} />

        ) : (
          <Route path="/" element={<h1>Sign In Or Sign Up</h1>} />
        )}
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
      </Routes>
    </>
  )
}

export default App
