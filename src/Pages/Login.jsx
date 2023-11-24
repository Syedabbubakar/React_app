import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const checkNumber = (num) =>{
    if(num>0){
      return "Positive Number"
    }else if(num<0){
      return "Negative Number"
    }else{
      return "Number is Zero"
    }
  }
    
  let number= checkNumber(45);

  const currDate = new Date().toDateString();
  console.log(currDate);

  return(
    <div>
      <h1>{number}</h1>
      <h1>Date:{currDate}</h1>
      <Form className='p-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )