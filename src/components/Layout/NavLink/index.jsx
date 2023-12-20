import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavLink({ children, to }) {
  const currentLocation = useLocation()

  return (
    <Link
      className={` 
      btn btn-ghost text-xl
        ${currentLocation.pathname === to ? 'font-bold' : ''}
      `}
      to={to}
    >
      {children}
    </Link>
  )
}
