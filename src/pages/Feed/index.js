import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";

export function Feed() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get("/post");

        setPosts([...response.data]);
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

  return (
    <>
      <h1>Meu Feed</h1>
      <Link to="/create-post">
        <Button variant="primary">Criar uma publicação</Button>
      </Link>

      <Button variant="danger" onClick={handleLoggout}>
        Sair
      </Button>
      {posts.map((currentPost) => {
        return <h2>{currentPost.title}</h2>;
      })}
    </>
  );
}
