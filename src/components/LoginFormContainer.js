import React, { useReducer } from 'react';
import LoginFormComponent from './LoginFormComponent.js';
import LoginReducer from '../reducers/LoginReducer.js';
import * as yup from 'yup'; // for everything

const LoginFormContainer = (props) => {
  const initialState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    loading: false
  };

  const [state, dispatch] = useReducer(LoginReducer, initialState);

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const handleChange = (e) => {
    dispatch({type: e.target.name, value: e.target.value})
  };

  const setLoader = (loading) =>{
    dispatch({type: 'loading', value: loading})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    let formData = new FormData(e.target);
    let data = { email: formData.get('email'), password: formData.get('password') }
    schema.validate(data, { abortEarly: false})
      .then(
        (value) => {
          try{
            fetch(
              "https://reqres.in/api/login",
              {
                "headers":{
                  "accept":"*/*",
                  "content-type":"application/json",
                  "sec-fetch-dest":"empty",
                  "sec-fetch-mode":"cors",
                  "sec-fetch-site":"same-origin"
                },
                "body":JSON.stringify(value),
                "method":"POST",
                "mode":"cors"
              }
            ).then(response => {
              setLoader(false);
              return response.json();
            }).then(response => console.log(response));
          } catch(err) {
            console.log(err);
            setLoader(false);
          }
        }
      )
      .catch(
        (err) => {
          err.inner.forEach(element => {
            dispatch({type: `${element.path}Error`, value: element.message})
          });
          setLoader(false);
        }
      )
  };

  console.log(`loading: ${state.loading}`)
  return(
    <LoginFormComponent
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      emailError={state.emailError}
      passwordError={state.passwordError}
      loading={state.loading}
    />
  )
};

export default LoginFormContainer;
