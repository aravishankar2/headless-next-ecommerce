import { Container, Form, Card } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card className="p-5 m-5">
        <h3 className="pb-4">Send Us A Message</h3>
        <Form className="d-flex justify-content-center align-items-center flex-column">
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group
            controlId="exampleForm.ControlTextarea1"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
};

export default ContactForm;
