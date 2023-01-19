import { Cart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between px-2">
        <img className="logoImg" />
        <Nav>
          <Nav.Item>
            <Link className="nav-link text-decoration-none text-dark" to="/">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className="nav-link text-decoration-none text-dark"
              to="/about"
            >
              About
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className="nav-link text-decoration-none text-dark"
              to="/contact"
            >
              Contact
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/">
              <Cart className="text-danger" height={30} width={30} />
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};

export default Header;
