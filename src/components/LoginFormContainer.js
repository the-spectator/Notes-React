import React, { useReducer } from 'react';
import LoginFormComponent from './LoginFormComponent.js';
import LoginReducer from '../reducers/LoginReducer.js';
import * as yup from 'yup'; // for everything

const LoginFormContainer = (props) => {
  const initialState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
  };

  const [state, dispatch] = useReducer(LoginReducer, initialState);

  let schema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().required(),
  });

  const handleChange = (e) => {
    dispatch({type: e.target.name, value: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    schema.validate(state, { abortEarly: false})
      .then(
        (value) => {
          console.log(value);
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      )
  };

  return(
    <LoginFormComponent
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      emailError={state.emailError}
      passwordError={state.passwordError}
    />
  )
};

export default LoginFormContainer;
