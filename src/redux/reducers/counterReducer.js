const initialState = {
  value: 0,
  name: 'counter',
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('increment called');
      return {...state, value: state.value + 1};
    case 'DECREMENT':
      
      return {...state, value: state.value - 1};
    default:
      return state;
  }
};

export default counterReducer;
