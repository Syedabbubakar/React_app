import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "../assets/style/SignUp.css"
import { useNavigate } from 'react-router';

function SignUp() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [uname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleData = (e) =>{
    e.preventDefault();

    localStorage.setItem("name", uname)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)

    navigate("/login")
  }
  const navigate = useNavigate();
  return (
    <div className='main-container'>
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='form-container'>
      <Row className="">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Username"
            value={uname} onChange={(e)=>setName(e.target.value)}
          />
          <Form.Control.Feedback type='invalid'>Enter valid username</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="">
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email ID</Form.Label>
          <InputGroup hasValidation>
            {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
            <Form.Control
              type="email"
              placeholder="Enter your email"
              aria-describedby="inputGroupPrepend"
              required
              value={email} onChange={(e)=>setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Enter valid email id
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" required 
          value={password} onChange={(e)=>setPassword(e.target.value)} 
          />
          <Form.Control.Feedback type="invalid">
            Enter valid password
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" className='btn btn-danger mb-3 signup-btn' onClick={handleData} >Create account</Button>
    </Form>
    </div>
  );
}

export default SignUp;