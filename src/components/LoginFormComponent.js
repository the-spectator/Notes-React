import React from 'react';
import { Label, Spinner, Form, FormGroup, Button, Input, FormFeedback } from 'reactstrap';
import CustomInput from './CustomInput';

const LoginFormComponent = (props) => {
  const {
    handleSubmit,
    handleChange,
    emailError,
    passwordError,
    loading
  } = props;

  console.log(loading);
  if(loading){
    return (
      <Spinner animation="border" role="status">
        Loading...
      </Spinner>
    );
  }

  console.log("I am re-rendering");
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
      <CustomInput helloFromOtherSide={passwordError}/>
    </Form>
  )
};

export default LoginFormComponent;
