import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import { AuthContextComponent } from "./context/authContext";
import { CreatePost } from "./pages/CreatePost";
import { Feed } from "./pages/Feed";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<ProtectedRoute component={Feed} />} />
          <Route
            path="/create-post"
            element={<ProtectedRoute component={CreatePost} />}
          />

          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
