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
                to="/suppliers"
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
              >
                Suppliers
              </NavLink>
              <NavLink
                to="/consumers"
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
              >
                Consumers
              </NavLink>
              <NavLink
                to="/bills"
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
              >
                Bills
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
