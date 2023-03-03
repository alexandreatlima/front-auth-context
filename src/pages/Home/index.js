import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export function Home() {
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
