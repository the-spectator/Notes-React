import React, { useReducer } from 'react';
import { Label, Form, FormGroup, Button, Input } from 'reactstrap';
import * as yup from 'yup'; // for everything

let schema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().required(),
});

const initialState = { email: '', password: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'setEmail':
      return {email: action.value};
    case 'setPassword':
      return {password: action.value};
    default:
      throw new Error();
  }
}

const checkValidity = (state, e) => {
  // debugger;
  schema.isValid(state).then((valid) => { console.log(valid); } )
};

const LoginFormComponent = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <Form onSubmit={checkValidity(state)}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          onChange={(e)=>{ dispatch({type: 'setEmail', value: e.target.value}) }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={(e)=>{ dispatch({type: 'setPassword', value: e.target.value}) }}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
};

export default LoginFormComponent;
