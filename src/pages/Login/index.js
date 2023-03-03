import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";

export function Login() {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser(response.data);

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/feed");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">E-mail:</label>
        <input
          id="input-email"
          type="email"
          value={form.email}
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="input-password">Senha:</label>
        <input
          id="input-password"
          type="password"
          value={form.password}
          name="password"
          onChange={handleChange}
        />

        <button>Entrar!</button>
      </form>
    </>
  );
}
