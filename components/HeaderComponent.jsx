import { NavLink } from 'react-router-dom';

export default function HeaderComponent() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">SeriesApp</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/series">Series</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categories">Categorías</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}