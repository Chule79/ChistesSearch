import './nav.css';

import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="">Todos Chistes</NavLink>
        </li>
        <li>
          <NavLink to="crear">Crear</NavLink>
        </li>
        <li>
          <NavLink to="search">Buscar Chiste</NavLink>
        </li>
      </ul>
    </nav>
  );
};
