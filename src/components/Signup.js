import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../redux/users/userSlice';

const Signup = () => {
  const { user, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    dispatch(createUser(inputValue));
    navigate('/');
  };

  return (
    <div className="auth-page">
      {user || (
        <>
          <input
            type="text"
            value={inputValue}
            placeholder="Enter New Username..."
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleButtonClick}>
            Sign up
          </button>
          {error}
        </>
      )}
    </div>
  );
};
export default Signup;
