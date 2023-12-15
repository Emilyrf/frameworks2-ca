import React from 'react';
import NavLink from '../../NavLink';
import { useContext } from 'react'; 
import { CartContext } from '../../../context/cart';


export default function NavBar() {
    const { cartItems = [] } = useContext(CartContext);
    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header>
            <nav className="flex h-20 bg-base-200 justify-center items-center gap-x-12 px-5 sm:rounded-xl sm:m-5">
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/contact'>
                    Contact
                </NavLink>
                <NavLink className='relative flex items-center' to='/cart'>
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge bg-primary text-white badge-sm indicator-item">{totalItemsInCart}</span>
                    </div>
                </NavLink>
            </nav>
        </header>
    )
}

