import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import { AuthContextComponent } from "./context/authContext";
import { AllPosts } from "./pages/AllPosts";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/posts"
            element={<ProtectedRoute component={AllPosts} />}
          />

          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
