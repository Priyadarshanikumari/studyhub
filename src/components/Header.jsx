import { NavLink, useNavigate } from "react-router-dom";
import { FcReading } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";

function Header({ setCurrentUser }) {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <NavLink
          className="navbar-brand d-flex align-items-center fw-bold fs-2"
          to="/"
        >
          <FcReading size={40} />
          <span className="ms-2">Study Hub</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarMenu"
        >
          <ul className="navbar-nav align-items-center">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/workshop">
                Workshop
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Course
              </a>

              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/react">
                    React JS
                  </NavLink>
                </li>

                <li>
                  <NavLink className="dropdown-item" to="/javascript">
                    JavaScript
                  </NavLink>
                </li>

                <li>
                  <NavLink className="dropdown-item" to="/bootstrap">
                    Bootstrap
                  </NavLink>
                </li>

                <li>
                  <NavLink className="dropdown-item" to="/html-css">
                    HTML & CSS
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>

            <li className="nav-item dropdown ms-3">
              <a
                href="#"
                className="nav-link"
                role="button"
                data-bs-toggle="dropdown"
              >
                <FaUserCircle size={32} />
              </a>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <span className="dropdown-item fw-bold">
                    {currentUser?.name}
                  </span>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <button
                    className="dropdown-item"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;