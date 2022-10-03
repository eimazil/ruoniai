import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Elektro</span>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
              >
                Movies
              </NavLink>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
              >
                Categories
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
