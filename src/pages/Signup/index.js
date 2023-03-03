import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/user/signup", form);

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-name">Nome:</label>
        <input
          id="input-name"
          type="text"
          value={form.name}
          name="name"
          onChange={handleChange}
        />
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

        <button>Cadastrar!</button>
      </form>
    </>
  );
}
