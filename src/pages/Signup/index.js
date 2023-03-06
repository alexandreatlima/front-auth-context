import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const [img, setImg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    setImg(e.target.files[0]);
  }

  async function handleUploadImage() {
    const uploadData = new FormData();

    uploadData.append("picture", img);

    const response = await api.post("/uploadImage", uploadData);

    return response.data.url;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const imgURL = await handleUploadImage();

      await api.post("/user/signup", { ...form, avatar: imgURL });

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

        <label htmlFor="input-avatar">Foto de perfil:</label>
        <input type="file" id="input-avatar" onChange={handleImage} />

        <button>Cadastrar!</button>
      </form>
    </>
  );
}
