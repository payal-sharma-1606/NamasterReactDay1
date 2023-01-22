import { Cart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between px-2 gradient">
        <img className="logoImg" />
        <Nav className="align-items-center ">
          <Nav.Item>
            <Link className="nav-link text-decoration-none text-white" to="/">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className="nav-link text-decoration-none text-white"
              to="/about"
            >
              About
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className="nav-link text-decoration-none text-white"
              to="/contact"
            >
              Contact
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/">
              <Cart className="text-white" height={30} width={30} />
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};

export default Header;
