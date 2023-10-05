import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../redux/users/userSlice';

const Signup = () => {
  const { user, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    dispatch(getUser(inputValue));
    navigate('/');
  };

  return (
    <div className="auth-page">
      {user || (
        <>
          <input
            type="text"
            value={inputValue}
            placeholder="Your Username"
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleButtonClick}>
            Log in
          </button>
          {error}
        </>
      )}
    </div>
  );
};
export default Signup;
