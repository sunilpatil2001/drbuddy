import LP from '../assets/LP.jpg';
import AP from '../assets/AP.png';
import MSE from '../assets/MSE.png';
import Pre from '../assets/Pre.png';
import '../App.css';
import NavBar from './NavBar';
import { useState } from 'react';
import Book from './Book';

function LandingPage() {
    const [book, setBook] = useState(false)
    const handleBook = () => {
        setBook(!book)
    }
    return (
        <div>
            <NavBar />
            <div className='landing'>
                <img src={LP} alt='teacher' />
                <div className='menu'>
                    <button className='p-2 mt-5 m-3 w-25'>About</button><br />
                    <button onClick={handleBook} className='p-2 m-3 w-25'>Book a free Demo</button><br />
                    {book &&
                        <Book />
                    }
                    <button className='p-2 m-3 w-25'>Contact US</button>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide mt-2" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-75 mx-auto" src={MSE} alt="First slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1 className='mb-5'><strong>Create Psychiatry Sheet</strong></h1>
                                <p className='w-50 mx-auto'>Expert verified Psychiatry sheet with multiple options and well equipped form having dropdowns and multiple selection options</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-75 mx-auto" src={Pre} alt="Second slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1 className='mb-5'><strong>Save and Print Prescription</strong></h1>
                                <p className='w-50 mx-auto'>Save the prescriptions of every folow up and print it directly through the browser on one click</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-75 mx-auto" src={AP} alt="Third slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1 className='mb-5'><strong>Add Patients</strong></h1>
                                <p className='w-50 mx-auto'>Add patients through the admin panel with all fields that are helpful to keep information of the client</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className='review mt-2'>
                    <h1 className='text-center'>Customer Reviews</h1>
                    <div className='d-flex justify-content-around p-5'>
                        {Array(4).fill().map((item, index) => (
                            <p key={index} className='review-item'>
                                    <p>Sunil Patil</p>
                                    <p></p>
                            </p>
                        ))}
                    </div>
                </div>
                <div className='client mt-2'>
                    <h1 className='text-center'>Our Clients</h1>
                    <div className='d-flex justify-content-around p-5'>
                        <p className='client-item'>
                            <p>Sunil Patil</p>
                            <p></p>
                        </p>
                        <p className='client-item'>

                        </p>
                        <p className='client-item'>

                        </p>
                        <p className='client-item'>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage