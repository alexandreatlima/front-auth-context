import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export function CreatePost() {
  const [form, setForm] = useState({ title: "", body: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/post", form);
      navigate("/feed");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Criar publicação</h1>

      <form onSubmit={handleSubmit}>
        <label>Titulo:</label>
        <input
          type="text"
          required="true"
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <label>Texto: </label>
        <input
          type="text"
          required="true"
          name="body"
          value={form.body}
          onChange={handleChange}
        />

        <h2>IMAGEM - SOON</h2>

        <button>Postar!</button>
      </form>
    </>
  );
}
