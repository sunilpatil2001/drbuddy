// import { useState } from 'react';
// import { Offcanvas, Form } from 'react-bootstrap';
// import '../App.css';
// import { Link, useNavigate } from 'react-router-dom';
// import SigninValidation from '../validations/signinValidation';
// import axios from 'axios';
// import baseUrl from '../assets/baseUrl';

// function Signin() {
//     const [show, setShow] = useState(true);
//     const nevigate = useNavigate();
//     const [errors, setErrors] = useState({})
//     const [values, setValues] = useState({
//         email: "",
//         pass: "",
//     })
//     const showPass = (e) => {
//         let temp = document.getElementById("pass");
//         if (temp.type === "password") {
//             temp.type = "text";
//         }
//         else {
//             temp.type = "password";
//         }
//     }
//     const handleChange = (event) => {
//         setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
//     }
//     const handleSignIn = async (event) => {
//         event.preventDefault();
//         const x = SigninValidation(values)
//         setErrors(x);
//         if (Object.keys(x).length === 0) {
//             document.getElementById('s').innerHTML = `<div class=" spinner-border spinner-border text-warning" role="status"><span class="visually-hidden">Loading...</span></div>`
//             try {
//                 await axios.post(baseUrl + '/signin', values).then(res => {
//                     if (res.data.sign) {
//                         sessionStorage.setItem('jwt', res.data.token)
//                         sessionStorage.setItem('role', res.data.result[0].role)
//                         sessionStorage.setItem('id', res.data.result[0].id)
//                         nevigate("/");
//                     }
//                     else {
//                         document.getElementById('r').innerHTML = 'Access Denied !!';
//                         document.getElementById('r').className = 'text-danger mt-2';
//                         document.getElementById('s').innerHTML = `<p className="btn btn-primary">Sign In</p>`
//                     }
//                 })
//             }
//             catch (e) {
//                 document.getElementById('r').innerHTML = 'something went wrong !!';
//                 document.getElementById('r').className = 'text-danger m-2';
//             }
//         }
//     }

//     const handleClose = () => {
//         setShow(false)
//         nevigate("/")
//     };

//     return (
//         <div className='signin'>
//             <Offcanvas className="signin-canvas" placement={'end'} show={show} onHide={handleClose}>
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>Sign in Here</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <h4 id='r'></h4>
//                 <Offcanvas.Body className='mt-4'>
//                     <Form>
//                         <Form.Group className="mb-3">
//                             <Form.Label htmlFor='email'>User Name</Form.Label>
//                             <Form.Control id='email' type="email" name="email" placeholder="email" onChange={handleChange}/>
//                             {errors.email && <small className="text-danger">{errors.email}</small>}
//                         </Form.Group>
//                         <Form.Group className="mb-3">
//                             <Form.Label htmlFor='pass'>Password</Form.Label>
//                             <Form.Control id="pass" type="password" name="pass" placeholder="password" onChange={handleChange} />
//                             {errors.pass && <small className="text-danger">{errors.pass}</small>}
//                         </Form.Group>
//                         <Form.Group className="mb-3">
//                             <Form.Check type="checkbox" onClick={showPass} label="show password" />
//                         </Form.Group>
//                         <p id='s' onClick={handleSignIn} className='btn btn-primary'>
//                             Sign In
//                         </p>
//                     </Form>
//                     <Link to={'/forget'} className='text-dark'>forgot password ?</Link>
//                 </Offcanvas.Body>
//             </Offcanvas>
//         </div>
//     );
// }

// export default Signin;