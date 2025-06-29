import { Link, Outlet } from "react-router-dom";
import '../App.css';
import logo from '../assets/logo.png';


function NavBar({ handleProducts, handleContact, handleExpert, handleBook }) {
    return (
        <>
            <div className='sticky-top navigation menu'>
                <nav className="navbar navbar-expand-md navbar-light m-0 p-1">
                    <img src={logo} className="logo" />
                    <button onClick={handleProducts} hidden={window.innerWidth > 770 ? false : true} className='p-1 mx-5  w-50'>Product</button>
                    <button hidden={window.innerWidth > 770 ? false : true} onClick={handleBook} className='p-1 mx-5 w-50'>{sessionStorage.getItem('role') === 'admin' ? 'Add Customer' : sessionStorage.getItem('role') === 'user' ? 'Add Review' : 'Book a free Demo'}</button>
                    <button hidden={window.innerWidth > 770 ? false : true} onClick={handleExpert} className='p-1 mx-5 w-50'>Expert's Panel</button>
                    <button hidden={window.innerWidth > 770 ? false : true} onClick={handleContact} className='w-50 mx-5 p-1'>Contact Us</button>

                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarTogglerDemo02">
                        {!sessionStorage.getItem('jwt') ? <Link to="/signin" className="d-block sign disabled p-2 text-light" tabIndex="-1" aria-disabled="true">Sign In</Link> : <Link to="logout" className="d-block sign disabled p-2 text-light" tabIndex="-1" aria-disabled="true">Log out</Link>}
                    </div> */}
                </nav>
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;