
import NavLink from '../NavLink';



export default function NavBar() {

    return (
        <header>
            <nav>
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