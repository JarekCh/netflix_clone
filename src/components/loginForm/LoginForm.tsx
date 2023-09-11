import './LoginForm.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  setEmail,
  selectUserEmail,
} from '../../features/userEmailSlice/userEmailSlice';

type Props = {};

const LoginForm = (props: Props) => {
  const userEmail = useAppSelector(selectUserEmail);

  const dispatch = useAppDispatch();

  const getEmial = (e: any) => {
    e.preventDefault();
    dispatch(setEmail(e));
  };

  console.log(
    '🚀 ~ file: LoginForm.tsx:12 ~ LoginForm ~ userEmail:',
    userEmail,
  );

  return (
    <div className="loginForm">
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form>
        <input type="email" placeholder="Email Adress" />
        <button
          onClick={() => getEmial('abc@gmail.com')}
          className="login__getStarted"
        >
          GET STARTED
          <img src="/img/icons/chevron-right.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
