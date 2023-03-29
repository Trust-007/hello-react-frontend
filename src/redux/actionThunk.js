import axios from 'axios';
import { greetingsActions } from './greetingsSlice';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/greetings';

const getGreeting = () => async (dispatch) => {
  const sendRequest = async () => {
    const response = await axios.get(BASE_URL);
    const data = await response;
    const result = data.data.message;
    dispatch(greetingsActions.getGreetings(result));
  };
  try {
    await sendRequest();
  } catch (error) {
    throw new Error(error);
  }
};

export default getGreeting;
