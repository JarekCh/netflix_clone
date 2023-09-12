import './LoginForm.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  setEmail,
  selectUserEmail,
} from '../../features/userEmailSlice/userEmailSlice';
import { useState } from 'react';

type Props = {};

const LoginForm = (props: Props) => {
  const [tempEmail, setTempEmail] = useState<string | ''>('');
  const userEmail = useAppSelector(selectUserEmail);

  const dispatch = useAppDispatch();

  const getEmail = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setEmail(tempEmail));
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
          <img src="/img/icons/chevron-right.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
