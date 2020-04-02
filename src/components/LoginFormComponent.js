import React from 'react';
import { Label, Form, FormGroup, Button, Input, FormFeedback } from 'reactstrap';

const LoginFormComponent = (props) => {
  const { handleSubmit, handleChange, emailError, passwordError } = props;

  return(
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          invalid={emailError !== ''}
        />
        <FormFeedback>{emailError}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={handleChange}
          invalid={passwordError !== ''}
        />
        <FormFeedback>{passwordError}</FormFeedback>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
};

export default LoginFormComponent;
