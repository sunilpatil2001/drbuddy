import { useState } from "react"
import { Modal } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Review() {
    const nevigate = useNavigate()
    const [isShow, invokeModal] = useState(true)
    const initModal = () => {
        if (isShow) {
          nevigate(-1)
        }
        return invokeModal(!isShow)
      }
    return (
        <Modal animation='fade' className="col-sm-8" show={isShow} aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton onClick={initModal}>
                <h4>Book a Slot</h4>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group col-md-12">
                        <label htmlFor="name" className='mb-2'><strong>Name</strong></label>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="date"><strong>Date</strong></label>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="time"><strong>Time</strong></label>
                    </div>
                    <h4 id='r'><input type='submit' className='btn btn-primary mt-3' value='Book Slot' /></h4>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default Review