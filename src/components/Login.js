import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getUser } from '../redux/users/userSlice';

const Signup = () => {
  const { user, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    dispatch(getUser(inputValue));
  };

  return (
    <div>
      Log in Page
      {user || (
        <>
          <input
            type="text"
            value={inputValue}
            placeholder="Enter text..."
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleButtonClick}>
            Send Input
          </button>
          {error}
        </>
      )}
    </div>
  );
};
export default Signup;
