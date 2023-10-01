import './LoginForm.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setEmail } from '../../features/userEmailSlice/userEmailSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

// TODO
// add input error

const LoginForm = (props: Props) => {
  const [tempEmail, setTempEmail] = useState<string | ''>('');
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const dispatch = useAppDispatch();

  const getEmail = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!emailRegex.test(tempEmail)) {
      setIsError(true);
    }
    if (emailRegex.test(tempEmail)) {
      dispatch(setEmail(tempEmail));
      navigate('/signup');
      setIsError(false);
    }
  };

  return (
    <div className="loginForm">
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form>
        <div className="loginForm__inputWrapper">
          <input
            type="email"
            placeholder="Email Adress"
            onChange={(e) => setTempEmail(e.target.value)}
          />
          {isError && (
            <p className="loginForm__inputWrapperError">Email is required.</p>
          )}
        </div>
        <button onClick={(e) => getEmail(e)} className="login__getStarted">
          GET STARTED
          <img src="/img/icons/chevron-right.png" alt="Try Now" />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
