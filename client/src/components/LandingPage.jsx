import LP from '../assets/LP.jpg';
import LPG from '../assets/LPG.jpg';
import dr2 from '../assets/dr2.jpg';
import dr1 from '../assets/dr1.jpg';
import '../App.css';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import Book from './Book';
import Customer from './Customer';
import Review from './Review';
import { TiArrowSortedDown } from "react-icons/ti";


function LandingPage() {
    const [book, setBook] = useState(false)
    const [review, setReview] = useState(false)
    const [customer, setCustomer] = useState(false)
    const [reviewCu, setReviewCu] = useState(false)
    const [products, setProducts] = useState(false)
    const [expert, setExpert] = useState(false)

    const handleBook = () => {
        setReviewCu(false)
        setExpert(false)
        setProducts(false)
        setBook(!book)
    }

    const handleReviewsCu = () => {
        setExpert(false)
        setBook(false)
        setProducts(false)
        setReviewCu(!reviewCu)
    }

    const handleExpert = () => {
        setBook(false)
        setReviewCu(false)
        setProducts(false)
        setExpert(!expert)
    }

    const handleProducts = () => {
        setBook(false)
        setReviewCu(false)
        setExpert(false)
        setProducts(!products)
    }

    const handleReview = () => {
        setBook(!review)
    }

    const handleUser = () => {
        setBook(!customer)
    }

    useEffect(() => {
        console.log("here")
    }, [])
    return (
        <div>
            <NavBar />
            <div className='landing'>
                <img src={LP} alt='teacher' className='lap' />
                <img src={LPG} alt='teacher' className='phone' />
                <div className='d-md-flex menu justify-content-between'>
                    <div className='d-sm-inline  col-md-3 col-sm-4 phone'>
                        <button className='mb-1 mt-2 w-50' onClick={handleProducts}>Product</button>
                        <button onClick={sessionStorage.getItem('role') === 'admin' ? handleUser : sessionStorage.getItem('role') === 'user' ? handleReview : handleBook} className='mb-1 w-50'>{sessionStorage.getItem('role') === 'admin' ? 'Add Customer' : sessionStorage.getItem('role') === 'user' ? 'Add Review' : 'Book a free Demo'}</button><br />
                        <button className='mb-1 w-50' onClick={handleExpert}>Expert's Panel</button>
                        {customer &&
                            <Customer onClose={() => setCustomer(false)} />
                        }
                        {review &&
                            <Review onClose={() => setReview(false)} />
                        }
                        <button className='w-50'>Contact Us</button>
                        {/* <button className='p-2 m-3 w-75' onClick={handleReviewsCu}>Reviews</button> */}
                    </div>
                    <div className='col-md-3 col-sm-4 lap'>
                        <button className='p-2 m-3 mt-5 w-75' onClick={handleProducts}>Product</button>
                        <button onClick={sessionStorage.getItem('role') === 'admin' ? handleUser : sessionStorage.getItem('role') === 'user' ? handleReview : handleBook} className='p-2 m-3 w-75'>{sessionStorage.getItem('role') === 'admin' ? 'Add Customer' : sessionStorage.getItem('role') === 'user' ? 'Add Review' : 'Book a free Demo'}</button><br />
                        <button className='p-2 m-3 w-75' onClick={handleExpert}>Expert's Panel</button>
                        {customer &&
                            <Customer onClose={() => setCustomer(false)} />
                        }
                        {review &&
                            <Review onClose={() => setReview(false)} />
                        }
                        <button className='p-2 m-3 w-75'>Contact Us</button>
                        {/* <button className='p-2 m-3 w-75' onClick={handleReviewsCu}>Reviews</button> */}
                    </div>
                    {book && <div className='book col-md-4 col-sm-12 my-5'>
                        <Book />
                    </div>
                    }
                    {expert &&
                        <div id="expertCarousel" className="carousel col-md-4 col-sm-8 mt-5 my-auto slide expert" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="expert-item text-center">
                                        <img className="p-3" src={dr2} />
                                        <div className="text-center">
                                            <p className="p-0 m-0">
                                                <b>Dr. Ashish Dhande</b>
                                            </p>
                                            <small className="">M.D. Pathology</small>
                                        </div>
                                        <span>
                                            Dr. Ashish is an experienced and dynamic pathologist. His
                                            expertise and dedication to his work has made him a valuable
                                            asset to his team.
                                        </span>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="expert-item text-center">
                                        <img className="p-3" src={dr1} />
                                        <div className="text-center">
                                            <p className="p-0 m-0">
                                                <b>Dr. Abhishek Barve</b>
                                            </p>
                                            <small className="">M.S., M.Ch. Plastic & Reconstructive Surgury</small>
                                        </div>
                                        <span>
                                            Dr. Abhishek is a highly skilled plastic and reconstruction surgeon, dedicated to providing exceptional care and results to his patients. With a passion for his craft, he offers a range of surgical and non-surgical procedures to help patients achieve their desired look and feel their best
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#expertCarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#expertCarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    }
                    {reviewCu &&
                        <div id="expertCarousel" className="carousel col-md-4 col-sm-8 mt-5 my-auto slide" data-ride="carousel">
                            <div className="carousel-inner review">
                                {Array(5).fill().map((item, index) => (
                                    <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
                                        <div key={index} className='review-item mx-auto d-flex flex-column mx-1' style={{ flex: '0 0 auto' }}>
                                            <small className='p-3 my-4 m-2'>"Exceptional psychiatrist with a compassionate approach, expert guidance, and genuine concern for patients' well-being. Highly recommend for top-notch mental health care and support."</small>
                                            <p className='text-center m-0'><b>Sunil Patil</b></p>
                                            <small className='text-right'>-- MBBS, psychiatry</small>
                                            <div className='d-flex mx-auto my-5'>
                                                {Array(index + 1).fill().map(() => (
                                                    <h3 style={{ color: "#ffd700" }}>&#9733;</h3>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <a className="carousel-control-prev" href="#expertCarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#expertCarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    }
                    {products &&
                        <div id="expertCarousel" className="carousel col-md-4 col-sm-8 mt-5 my-auto slide expert" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item expert-item active">
                                    <h4 className='mt-md-5 mt-sm-2 mb-md-5 mb-sm-2 m-2'>Patient Profile Management</h4>
                                    <ul>
                                        <li>Basic Information: Name, age, gender, contact details, insurance information, emergency contact.</li>
                                        <li>Medical History: Past medical history, family medical history, allergies, medications, and surgeries.</li>
                                        <li>Mental Health History: Previous diagnoses, treatments, therapy sessions, and interventions.</li>
                                        <li>Consent Forms: Digital signatures for consent and treatment agreements.</li>
                                    </ul>
                                </div>
                                <div className="carousel-item expert-item">
                                    <h4 className='mt-md-5 mt-sm-2 mb-md-5 mb-sm-2 m-2'>Mental State Examination (MSE) Documentation</h4>
                                    <ul>
                                        <li><strong>Sectioned Data Fields:</strong>
                                            <ul>
                                                <li>Appearance</li>
                                                <li>Speech</li>
                                                <li>Mood and Affect</li>
                                                <li>Thought Process (organized, disorganized)</li>
                                                <li>Perception (hallucinations, delusions)</li>
                                                <li>Cognition (memory, attention)</li>
                                                <li>Insight and Judgment</li>
                                            </ul>
                                        </li>
                                        <li><strong>Templates and Checklists:</strong>
                                            <ul>
                                                <li>Predefined templates with drop-downs for efficient MSE documentation</li>
                                                <li>Easy-to-use interface for quick completion in few clicks</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="carousel-item expert-item">
                                    <h4 className='mt-md-5 mt-sm-2 mb-md-5 mb-sm-2 m-2'>Case History Management</h4>
                                    <ul>
                                        <li><strong>Detailed Case Notes:</strong>
                                            <ul>
                                                <li>Chronological documentation of patient's mental health journey</li>
                                                <li>Documentation of therapy sessions</li>
                                                <li>Tracking of patient progress</li>
                                            </ul>
                                        </li>
                                        <li><strong>Risk Assessment:</strong>
                                            <ul>
                                                <li>Recording of suicide risk</li>
                                                <li>Documentation of self-harm behaviours</li>
                                                <li>Assessment of violence risk</li>
                                            </ul>
                                        </li>
                                        <li><strong>Diagnosis Tracking:</strong>
                                            <ul>
                                                <li>Tracking of changes in diagnosis over time</li>
                                                <li>Inclusion of both ICD-10 and DSM-5 codes</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#expertCarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#expertCarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    }
                </div>
                {/* <div className='client mt-1'>
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
                    </div> */}
            </div>
        </div>
    )
}

export default LandingPage