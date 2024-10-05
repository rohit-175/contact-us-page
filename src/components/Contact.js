import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import '../CSS/Contact.css'

export const Contact = () => {
    const initialDetails = {
        Name: '',
        Email: '',
        Message: ''
    }
    const [fromDetails, setFormDetails] = useState(initialDetails)
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (field, value) =>{
        setFormDetails({
            ...fromDetails,
            [field]: value
        })
    }

    const handleSubmit = () => {
        
    }

    return(
        <section>
            <Container className="container">
                <Row>
                    <Col>
                    <h2>Contact Us</h2>
                    <p>Feel free to contact us at anytime. We will get back to you as soon as possible.</p>
                    <form id ='form' onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                            <label>Name</label><br></br>
                            <input type="text" value={fromDetails.Name} onChange={(e) =>onFormUpdate('Name', e.target.value)}/>
                            </Col>
                            <Col>
                            <label>Email</label><br></br>
                            <input type="email" value={fromDetails.Email} onChange={(e) =>onFormUpdate('Email', e.target.value)}/>
                            </Col>
                            <Col>
                            <label>Message</label><br></br>
                            <textarea row="6" value={fromDetails.Email} onChange={(e) =>onFormUpdate('Message', e.target.value)}/>
                            </Col>
                            <Col>
                            <button type="submit"><span>Send</span></button> 
                            </Col>
                        </Row>
                    </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}