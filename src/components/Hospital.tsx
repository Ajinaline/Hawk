import "./Hospital.css";
//import Home from "./components/Home";

function ListGroup() {
  const items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  document.body.style.backgroundColor = "#E6E6E6";

  let signed = false;

  function dashboard() {
    signed = false;
  }

  return (
    <div className="container">
      <h6 className="header">LOGIN</h6>
      <form>
        <div className="first">
          <label>Username:</label>
          <br />
          <input className="textbox" type="text" placeholder="username123" />
          <br />
        </div>
        <div className="second">
          <label>Password:</label>
          <br />
          <input className="textbox" type="text" placeholder="password123" />
        </div>
        <input className="login" type="submit" value="Sign In" />
      </form>
    </div>
  );
}

export default ListGroup;
