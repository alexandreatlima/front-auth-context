import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";

import { SearchBar } from "../../components/SearchBar";

export function Feed() {
  const [posts, setPosts] = useState([]);
  const [renderPosts, setRenderPosts] = useState([]);
  const [user, setUser] = useState({ avatar: "" });
  const navigate = useNavigate();

  console.log(user);

  const { setLoggedInUser } = useContext(AuthContext);

  console.log(renderPosts);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get("/post");
        const responseUser = await api.get("/user/profile");

        setUser({ ...responseUser.data });
        setPosts([...response.data]);
        setRenderPosts([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPost();
  }, []);

  function handleLoggout() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/");
  }

  function handleSearch(e) {
    if (e.target.value === "") {
      setRenderPosts(posts);
      return;
    }

    setRenderPosts(() => {
      return posts.filter((currentPost) => {
        return currentPost.title.includes(e.target.value);
      });
    });
  }

  return (
    <>
      <h1>Meu Feed</h1>

      <img src={user.avatar} alt="Foto de perfil" />

      <Link to="/create-post">
        <Button variant="primary">Criar uma publicação</Button>
      </Link>

      <Button variant="danger" onClick={handleLoggout}>
        Sair
      </Button>
      <SearchBar filterPostOnFeed={handleSearch} />

      {renderPosts.map((currentPost) => {
        return <h2>{currentPost.title}</h2>;
      })}
    </>
  );
}
