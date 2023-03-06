import Form from "react-bootstrap/Form";

export function SearchBar(props) {
  return (
    <form>
      <Form.Control onChange={props.filterPostOnFeed} />
    </form>
  );
}
