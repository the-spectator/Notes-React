import React from 'react';
import { Label, Form, FormGroup, Button, Input } from 'reactstrap';
import * as yup from 'yup'; // for everything

let schema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().required(),
});

const checkValidity = (e) => {
  debugger;
  schema.isValid({
    name: e.target
  }).then((valid) => { console.log(valid); } )
};

const LoginFormComponent = (props) => {
  return(
    <Form onSubmit={checkValidity}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="Enter Email" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="Enter password" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
};

export default LoginFormComponent;
