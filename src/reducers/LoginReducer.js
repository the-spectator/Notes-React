const LogininReducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.value };
    case 'password':
      return { ...state, password: action.value };
    case 'emailError':
      return { ...state, emailError: action.value };
    case 'passwordError':
      return { ...state, passwordError: action.value };
    default:
      throw new Error();
  }
}

export default LogininReducer;
