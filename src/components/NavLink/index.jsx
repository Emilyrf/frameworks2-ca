import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavLink({ children, to }) {
  const currentLocation = useLocation();

  return (
    <Link
      className={`
        text-blue-500 hover:text-blue-700
        ${currentLocation.pathname === to ? 'font-bold' : ''}
      `}
      to={to}
    >
      {children}
    </Link>
  );
}
