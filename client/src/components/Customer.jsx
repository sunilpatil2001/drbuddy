import { useEffect, useState } from "react";
// import Select from 'react-select'
import { Modal } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import AddpatientValidation from '../validations/addPatientValidation';
// import baseUrl from '../assets/baseUrl'

function Customer({ onClose }) {
    const nevigate = useNavigate()
    const [show, setShow] = useState(true);
    // const [name, setName] = useState('');
    // const [id, setId] = useState('');
    // const [errors, setErrors] = useState({});
    // const [details, setDetails] = useState({
    //     id: null,
    //     email: "",
    //     contact: "",
    //     address: ""
    // })
    // const [finishStatus, setfinishStatus] = useState(false);
    // const [names, getNames] = useState([]);

    const handleClose = () => {
        setShow(false)
        onClose();
        // nevigate('/admin')
    };
    // const handleNames = async (data) => {
    //     console.log(data)
    //     setId(data.id)
    //     setName(data)
    //     await axios.get(baseUrl + '/get_patients/' + data.id).then(res => {
    //         console.log("res : ", res.data)
    //         setDetails(res.data[0])
    //     })
    // }
    // const fetchInfo = async () => {
    //     return await axios.get(baseUrl + '/get_patients').then(res => {
    //         getNames(res.data)
    //     })
    // }

    // const handleChange = (event) => {
    //     setDetails(prev => ({...prev, [event.target.name]: event.target.value }))
    // }

    // const handleSave = async () =>{
    //     details.id = id
    //     console.log(details)
    //     const x = AddpatientValidation(details)
    //     setErrors(x);
    //     if(id === ""){
    //         document.getElementById('na').innerHTML = "Please select name"
    //     }
    //     try { 
    //         if (Object.keys(x).length === 0 && id !== "") {
    //             document.getElementById('r').innerHTML = `<div class=" spinner-border spinner-border text-warning" role="status"><span class="visually-hidden">Loading...</span></div>`
    //             await axios.post(baseUrl + '/update_patient', details).then(res => {
    //                 if (res.data === 'success')
    //                     document.getElementById('r').innerHTML = 'Details Updated !!!'
    //                 document.getElementById('r').className = 'text-success'
    //                 setTimeout(() => {
    //                     nevigate('/admin');
    //                 }, 3000);
    //             })
    //         }
    //     } catch (e) {
    //         document.getElementById('r').innerHTML = 'Please try again'
    //         document.getElementById('r').className = 'text-danger'
    //         setTimeout(() => {
    //             window.location.reload();
    //         }, 2000);
    //     }
    // }


    // const onBackButtonEvent = (e) => {
    //     e.preventDefault();
    //     if (!finishStatus) {
    //         if (window.confirm("You cannot go back !!")) {
    //             setfinishStatus(true)
    //             // nevigate(-1)
    //         } else {
    //             window.history.pushState(null, null, window.location.pathname);
    //             setfinishStatus(false)
    //         }
    //     }
    // }
    useEffect(() => {
        // const jwt = sessionStorage.getItem('jwt')
        // const user = sessionStorage.getItem('role')
        // if (!jwt || user !== 'admin')
        //     nevigate('/signin')
        // fetchInfo()
        // window.history.pushState(null, null, window.location.pathname);
        // window.addEventListener('popstate', onBackButtonEvent);
        // return () => {
        //     window.removeEventListener('popstate', onBackButtonEvent);
        // };

    }, [])
    return (
        <div className='print-pre text-center col-sm-6'>
            <Modal className='stats-modal' size="xl" show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body >
                    <div>
                        <form>
                            <div className='row add'>
                                <div className="form-group col-md-4 col-sm-6">
                                    <label htmlFor="exampleInputEmail1"><strong>Full Name</strong></label>
                                    <input type="text" name="name" className="form-control" placeholder="full name"
                                        autoComplete="off" />
                                    {/* {errors.name && <p className='text-danger m-0'>{errors.name}</p>} */}
                                </div>
                                <div className="form-group col-md-4 col-sm-6">
                                    <label htmlFor="contact"><strong>Contact</strong></label>
                                    <input type="tel" name="contact" id='contact' className="form-control" placeholder="contact" autoComplete="off" />
                                    {/* {errors.contact && <p className='text-danger m-0'>{errors.contact}</p>} */}
                                </div>

                                <div className="form-group col-md-4 col-sm-6">
                                    <label htmlFor="exampleInputEmail1"><strong>Email</strong></label>
                                    <input type="email" name="email" className="form-control" placeholder="email" autoComplete="off" />
                                    {/* {errors.email && <p className='text-danger m-0'>{errors.email}</p>} */}
                                </div>
                                <div className="form-group col-md-4 col-sm-6">
                                    <label htmlFor="address"><strong>Address</strong></label>
                                    <input type="text" name="address" id='address' className="form-control" placeholder="address"
                                        autoComplete="off" />
                                </div>
                                <div className="form-group col-md-4 col-sm-6 medical">
                                    <label htmlFor="age"><strong>Clinic/Hospital Name</strong></label>
                                    <input type="number" min='0' max='150' id='age' name="pulse" className="form-control" placeholder="beats/min" autoComplete="off" />
                                </div>
                                <div className="form-group col-md-4 col-sm-6 medical">
                                    <label htmlFor="age"><strong></strong></label>
                                    <input type="number" min='0' max='150' id='age' name="bp" className="form-control" placeholder="..." autoComplete="off" />
                                </div>
                                <div className="form-group col-md-4 col-sm-6 medical">
                                    <label htmlFor="age"><strong></strong></label>
                                    <input type="number" min='0' max='150' id='age' name="weight" className="form-control" placeholder="..." autoComplete="off" />
                                </div>
                                <div className="form-group col-md-4 col-sm-6">
                                    <label htmlFor="ref"><strong></strong></label>
                                    <input type="text" id='ref' name="referral" className="form-control" placeholder="..." autoComplete="off" />
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <h4 id='r'><button className="btn btn-primary">Add</button></h4>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Customer