import LP from '../assets/LP.jpg';
import AP from '../assets/AP.png';
import MSE from '../assets/MSE.png';
import Pre from '../assets/Pre.png';
import '../App.css';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import Book from './Book';

function LandingPage() {
    const [book, setBook] = useState(false)
    const handleBook = () => {
        setBook(!book)
    }

    const handleReview = () => {
        console.log('Review')
    }

    const handleUser = () => {
        console.log('User')
    }

    useEffect(() =>{
        setBook(false)
    },[])
    return (
        <div>
            <NavBar />
            <div className='landing'>
                <img src={LP} alt='teacher' />
                <div className='menu'>
                    <button className='p-2 mt-5 m-3 w-100'>About</button><br />
                    <button onClick={sessionStorage.getItem('role') === 'admin' ? handleUser : sessionStorage.getItem('role') === 'user' ? handleReview : handleBook} className='p-2 m-3 w-100'>{sessionStorage.getItem('role') === 'admin' ? 'Add Customer' : sessionStorage.getItem('role') === 'user' ? 'Add Review' : 'Book a free Demo'}</button><br />
                    {book &&
                        <Book onClose={() => setBook(false)} />
                    }
                    {book &&
                        <Book onClose={() => setBook(false)} />
                    }
                    {book &&
                        <Book onClose={() => setBook(false)} />
                    }
                    <button className='p-2 m-3 w-100'>Contact Us</button>
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
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className='mb-5'><strong>Create Psychiatry Sheet</strong></h1>
                                <p className='w-50 mx-auto'>Expert verified Psychiatry sheet with multiple options and well equipped form having dropdowns and multiple selection options</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-75 mx-auto" src={Pre} alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className='mb-5'><strong>Save and Print Prescription</strong></h1>
                                <p className='w-50 mx-auto'>Save the prescriptions of every folow up and print it directly through the browser on one click</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-75 mx-auto" src={AP} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className='mb-5'><strong>Add Patients</strong></h1>
                                <p className='w-50 mx-auto'>Add patients through the admin panel with all fields that are helpful to keep information of the client</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
                <div className='review mt-1'>
                    <h1 className='text-center'>Customer Reviews</h1>
                    <div className='d-flex p-2' style={{ overflowX: 'auto', flexWrap: 'nowrap' }}>
                        {Array(10).fill().map((item, index) => (
                            <div key={index} className='review-item d-flex flex-column mx-1' style={{ flex: '0 0 auto' }}>
                                <small className='p-3 m-1'>"Exceptional psychiatrist with a compassionate approach, expert guidance, and genuine concern for patients' well-being. Highly recommend for top-notch mental health care and support."</small>
                                <p className='text-center m-0'><b>Sunil Patil</b></p>
                                <small className='text-right'>-- MBBS, psychiatry</small>
                                <div className='d-flex mx-auto'>
                                    {Array(index + 1).fill().map(() => (
                                        <h3 style={{ color: "#ffd700" }}>&#9733;</h3>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='client mt-1'>
                    <h1 className='text-center'>Our Clients</h1>
                    <div className='d-flex justify-content-around p-5'>
                        <div className='client-item'>
                            <p>Sunil Patil</p>
                            <p></p>
                        </div>
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