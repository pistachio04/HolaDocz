import {createStore} from 'redux';

// const [profile, setProfile] = useState();

const initialState = {
  loading: false,
  name: 'Sigid Prasetyo',
  address: 'Jogja',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
