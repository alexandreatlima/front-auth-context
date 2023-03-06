import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export function Home() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(false);
  }, [loggedInUser]);

  useEffect(() => {
    if (loggedInUser) {
      navigate("/feed");
    }
  }, [isLoading]);

  return (
    <>
      <h1>Bem vindos a IronSocial!</h1>
      <Link to="/signup">
        <Button variant="success">Cadastre-se</Button>
      </Link>
      <Link to="/login">
        <Button variant="primary">Login</Button>
      </Link>
    </>
  );
}
