import React from 'react';
import NavLink from '../NavLink';

export default function NavBar() {

    return (
        <header>
            <nav className="flex h-20 bg-gray-50 justify-center items-center gap-x-12 px-5 sm:rounded-xl sm:m-5">
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/contact'>
                    Contact
                </NavLink>
                <NavLink to='/cart'>
                    Cart
                </NavLink>
            </nav>
        </header>
    )
}

