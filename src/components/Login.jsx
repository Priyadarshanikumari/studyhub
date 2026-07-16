import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ setCurrentUser }) {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("user"));

    if (!data) {
      alert("Please Register First");
      return;
    }

    if (
      login.email === data.email &&
      login.password === data.password
    ) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(data)
      );

      setCurrentUser(data);

      alert("Login Successfully");

      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">
              Login
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Email</label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={login.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Password</label>

                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="btn btn-success w-100">
                Login
              </button>
            </form>

            <p className="text-center mt-3">
              Don't have an account?
              <Link
                to="/register"
                className="ms-2 text-decoration-none"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;