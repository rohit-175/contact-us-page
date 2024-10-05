import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import '../CSS/Contact.css'

export const Contact = () => {
    const initialDetails = {
        Name: '',
        Email: '',
        Message: ''
    }
    const [formDetails, setFormDetails] = useState(initialDetails)
    const [status, setStatus] = useState({});

    const onFormUpdate = (field, value) =>{
        setFormDetails({
            ...formDetails,
            [field]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        let result = await response.json();
        setFormDetails(initialDetails);
        if (result.code == 200) {
          setStatus({ succes: true, message: 'Message sent successfully'});
        } else {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
      };

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
                            <input type="text" value={formDetails.Name} onChange={(e) =>onFormUpdate('Name', e.target.value)}/>
                            </Col>
                            <Col>
                            <label>Email</label><br></br>
                            <input type="email" value={formDetails.Email} onChange={(e) =>onFormUpdate('Email', e.target.value)}/>
                            </Col>
                            <Col>
                            <label>Message</label><br></br>
                            <textarea value={formDetails.Message} onChange={(e) =>onFormUpdate('Message', e.target.value)}/>
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