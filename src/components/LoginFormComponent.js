import React from 'react';
import { Label, Form, FormGroup, Button, Input } from 'reactstrap';

const LoginFormComponent = (props) => {
  return(
    <Form>
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
