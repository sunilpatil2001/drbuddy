import { Link, Outlet } from "react-router-dom";
import '../App.css';
import logo from '../assets/logo.png';


function NavBar() {
    return (
        <>
            <div className='sticky-top navigation'>
                <nav className="navbar navbar-expand-md navbar-light m-0 p-1">
                    <img src={logo} alt='teacher' className="logo" />
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