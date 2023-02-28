import { Route, Routes } from "react-router-dom";
import { AuthContextComponent } from "./context/authContext";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
