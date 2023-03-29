import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getGreeting from '../redux/actionThunk';

const Greetings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  const message = useSelector((state) => state.greeting);

  return (
    <div>
      <h1>Greetings</h1>
      <div>
        Message:
        {message.value}
      </div>
    </div>
  );
};

export default Greetings;
