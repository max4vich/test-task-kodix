import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetail from "./pages/blog/postDetail";
import Home from "./pages/home/home";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signUp";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blog/:id" element={<PostDetail />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/sign-up" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
