import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import bookValidations from '../validations/book';
import baseUrl from '../assets/baseUrl'

function Book() {
    const nevigate = useNavigate()
    const [errors, setErrors] = useState({});
    const [details, setDetails] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
        clinic: ""
    })

    const handleChange = (event) => {
        setDetails(prev => ({...prev, [event.target.name]: event.target.value }))
    }

    const handleSave = async (e) =>{
        e.preventDefault()
        const x = bookValidations(details)
        setErrors(x);
        try { 
            if (Object.keys(x).length === 0) {
                document.getElementById('r').innerHTML = `<div class=" spinner-border spinner-border text-warning" role="status"><span class="visually-hidden">Loading...</span></div>`
                await axios.post(baseUrl + '/book', details).then(res => {
                    if (res.data === 'success')
                        document.getElementById('book').innerHTML = '<h3 className="text-success">Congrats you have successfully submitted your details for the Demo. Our team will get back to you soon.</h3>'
                })
            }
        } catch (e) {
            document.getElementById('book').innerHTML = 'Please try again'
            document.getElementById('book').className = 'text-danger'
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }

    useEffect(() => {
    }, [])
    return (
        <div className='print-pre p-4' style={{ flex: '0 0 auto'}}>
            <form id="book">
                <div className='row add'>
                    <div className="form-group col-12">
                        <label htmlFor="exampleInputEmail1"><strong>Full Name</strong></label>
                        <input type="text" name="name" onChange={handleChange} className="form-control" placeholder="full name"
                            autoComplete="off" />
                        {errors.name && <small className='text-danger m-0'>{errors.name}</small>}
                    </div>
                    <div className="form-group col-12">
                        <label htmlFor="contact"><strong>Contact</strong></label>
                        <input type="tel" name="contact" id='contact' onChange={handleChange} className="form-control" placeholder="contact" autoComplete="off" />
                        {errors.contact && <small className='text-danger m-0'>{errors.contact}</small>}
                    </div>
                    <div className="form-group col-12">
                        <label htmlFor="exampleInputEmail1"><strong>Email</strong>(optional)</label>
                        <input type="email" name="email" onChange={handleChange} className="form-control" placeholder="email" autoComplete="off" />
                        {errors.email && <small className='text-danger m-0'>{errors.email}</small>}

                    </div>
                    <div className="form-group col-12">
                        <label htmlFor="address"><strong>Address</strong>(optional)</label>
                        <input type="text" name="address" id='address' onChange={handleChange} className="form-control" placeholder="address"
                            autoComplete="off" />
                    </div>
                    <div className="form-group col-12 medical">
                        <label htmlFor="age"><strong>Clinic/Hospital Name</strong>(optional)</label>
                        <input type="text" name="clinic" id='clinic' onChange={handleChange} className="form-control" placeholder="clinic"
                            autoComplete="off" />
                    </div>
                </div>
                <div className="text-center mt-2">
                    <h4 id='r'><button className="btn btn-primary" onClick={handleSave}>Book</button></h4>
                </div>
            </form>
        </div>
    )
}

export default Book