import './LoginForm.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setEmail } from '../../features/userEmailSlice/userEmailSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const LoginForm = (props: Props) => {
  const [tempEmail, setTempEmail] = useState<string | ''>('');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const getEmail = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setEmail(tempEmail));
    navigate('/signup');
  };

  return (
    <div className="loginForm">
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form>
        <input
          type="email"
          placeholder="Email Adress"
          onChange={(e) => setTempEmail(e.target.value)}
        />
        <button onClick={(e) => getEmail(e)} className="login__getStarted">
          GET STARTED
          <img src="/img/icons/chevron-right.png" alt="Try Now" />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
