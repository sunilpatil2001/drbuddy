import { Link, Outlet } from "react-router-dom";
import '../App.css';
import logo from '../assets/logo.png';


function NavBar({ handleProducts, handleContact, handleExpert, handleBook }) {
    return (
        <>
            <div className='sticky-top navigation menu'>
                <nav className="navbar navbar-expand-md navbar-light m-0 p-1">
                    <img src={logo} className="logo" />
                    <button onClick={handleProducts} hidden={window.innerWidth > 770 ? false : true} className='p-1   w-50'>Product</button>
                    <button hidden={window.innerWidth > 770 ? false : true} onClick={handleBook} className='p-1  w-50'>{sessionStorage.getItem('role') === 'admin' ? 'Add Customer' : sessionStorage.getItem('role') === 'user' ? 'Add Review' : 'Book a free Demo'}</button>
                    <button hidden={window.innerWidth > 770 ? false : true} onClick={handleExpert} className='p-1  w-50'>Expert's Panel</button>
                    <button hidden={window.innerWidth > 770 ? false : true} onClick={handleContact} className='w-50  p-1'>Contact Us</button>
                </nav>
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;