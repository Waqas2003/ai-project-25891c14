const initialState = {
  isAuthenticated: false,
  user: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isAuthenticated: true, user: action.user };
    case 'LOGOUT_SUCCESS':
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

export default authReducer;