import LP from '../assets/BGL.jpg';
import BGP from '../assets/BGP.jpg';
import dr2 from '../assets/dr2.jpeg';
import dr1 from '../assets/dr1.jpeg';
import '../App.css';
import NavBar from './NavBar';
import { useEffect, useState, useRef } from 'react';
import Book from './Book';
import patient from '../assets/patient.jpeg'
import Customer from './Customer';
import Review from './Review';


function LandingPage() {
    const [book, setBook] = useState(false)
    const [review, setReview] = useState(false)
    const [customer, setCustomer] = useState(false)
    const [contact, setContact] = useState(false)
    const [reviewCu, setReviewCu] = useState(false)
    const [products, setProducts] = useState(false)
    const [expert, setExpert] = useState(false)
    const componentRef = useRef(null);

    const handleBook = () => {
        setReviewCu(false)
        setExpert(false)
        setProducts(false)
        setContact(false)
        setBook(!book)
        if (!book) {
            setTimeout(() => {
                componentRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }

    const handleContact = () => {
        setExpert(false)
        setBook(false)
        setProducts(false)
        setReviewCu(false)
        setContact(!contact)
        if (!contact) {
            setTimeout(() => {
                componentRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }

    const handleExpert = () => {
        setBook(false)
        setReviewCu(false)
        setProducts(false)
        setContact(false)
        setExpert(!expert)
        if (!expert) {
            setTimeout(() => {
                componentRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }

    const handleProducts = () => {
        setBook(false)
        setReviewCu(false)
        setExpert(false)
        setContact(false)
        setProducts(!products)
        console.log(products)
        if (!products) {
            setTimeout(() => {
                componentRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
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
            <NavBar
                handleProducts={handleProducts}
                handleContact={handleContact}
                handleExpert={handleExpert}
                handleBook={handleBook}
            />
            <div className='landing'>
                <img src={LP} alt='teacher' className='lap' />
                <img src={BGP} alt='teacher' className='phone' />
                <div className='d-md-flex menu justify-content-between'>
                    <div className='d-flex flex-column col-md-3 col-sm-4 phone'>
                        <button className='mb-3 p-2 mx-auto w-75' onClick={handleProducts}>Product</button>
                        <button onClick={sessionStorage.getItem('role') === 'admin' ? handleUser : sessionStorage.getItem('role') === 'user' ? handleReview : handleBook} className='mb-3 mx-auto p-2 w-75'>{sessionStorage.getItem('role') === 'admin' ? 'Add Customer' : sessionStorage.getItem('role') === 'user' ? 'Add Review' : 'Book a free Demo'}</button>
                        <button className='mb-3 mx-auto p-2 w-75' onClick={handleExpert}>Expert's Panel</button>
                        {customer &&
                            <Customer onClose={() => setCustomer(false)} />
                        }
                        {review &&
                            <Review onClose={() => setReview(false)} />
                        }
                        <button className='w-75 mx-auto p-2' onClick={handleContact}>Contact Us</button>
                    </div>
                    <div className='col-md-3 col-sm-4 lap'>
                        {customer &&
                            <Customer ref={componentRef} onClose={() => setCustomer(false)} />
                        }
                        {review &&
                            <Review ref={componentRef} onClose={() => setReview(false)} />
                        }
                    </div>
                    {book && <div ref={componentRef} className='book mx-2 col-md-4 col-sm-8 mt-5 my-auto slide expert'>
                        <Book />
                    </div>
                    }
                    {expert &&
                        <div ref={componentRef} id="expertCarousel" className="carousel col-md-4 col-sm-8 mt-5 my-auto slide expert" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="expert-item text-center px-5">
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
                                    <div className="expert-item text-center px-5">
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
                    {/* {reviewCu &&
                        <div ref={componentRef} id="expertCarousel" className="carousel col-md-4 col-sm-8 mt-5 my-auto slide" data-ride="carousel">
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
                    } */}
                    {products &&
                        <div ref={componentRef} id="expertCarousel" className="carousel patientdata col-md-4 col-sm-8 mt-5 my-auto slide expert" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item expert-item active px-4">
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
                                <div className="carousel-item expert-item px-4">
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
                                <div className="carousel-item expert-item text-center px-4">
                                    <h4 className='mt-1'>Patient Management</h4>

                                    <img src={patient} alt='teacher' className='patient mt-2 mb-4' />
                                    <ul className='text-left'>
                                        <li>Name, age, gender, contact details, emergency contact.</li>
                                        <li>Past medical history, family medical history, medications, and surgeries.</li>
                                        <li>Previous diagnoses, treatments, and interventions.</li>
                                        <li>Digital signatures for consent and treatment agreements.</li>
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
                    {contact &&
                        <div ref={componentRef} className='mx-2 col-md-4 col-sm-8 mt-5 my-auto contact text-center'>
                            <div>
                                <div className="text-center mt-4 mb-5">
                                    <h3 className='mt-5'>Get in touch with us!</h3>
                                </div>
                                <div className='row add'>
                                    <div className="form-group col-12">
                                        <h5><strong>Contact</strong></h5>
                                        <h4>+91-1234567890</h4>
                                    </div>
                                    <div className="form-group col-12">
                                        <h5><strong>Email</strong></h5>
                                        <h4>example@email.com</h4>
                                    </div>
                                    <div className="form-group col-12">
                                        <h5><strong>Address</strong></h5>
                                        <h5>Manoraj Society, Off Karve Road, Pune, Maharashtra, India</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        // <div className="carousel col-md-4 col-sm-8 mt-5 my-auto book">

                        // </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default LandingPage