import { useRef, useState } from 'react';
import './SignUp.css';
import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Netflix from '../../assets/netflixLogoT.png';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  resetEmail,
  selectUserEmail,
} from '../../features/userEmailSlice/userEmailSlice';

type Props = {};

const SignUp = (props: Props) => {
  const userEmail = useAppSelector(selectUserEmail);
  const [userEmailInput, setUserEmailInput] = useState<string>(userEmail);
  const [userPassword, setUserPassword] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clearEamil = () => {
    dispatch(resetEmail());
  };

  const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, userEmailInput, userPassword)
      .then(() => {
        navigate('/', { replace: true });
        clearEamil();
      })
      .catch((err) => alert(err.message));
  };

  const signIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, userEmailInput, userPassword)
      .then(() => {
        navigate('/', { replace: true });
        clearEamil();
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="signup__background">
      <img
        className="loginHeader__logo"
        src={Netflix}
        alt=""
        onClick={() => {
          navigate('/', { replace: true });
        }}
      />
      <div className="signup">
        <form>
          <h1>Sing In</h1>
          <input
            placeholder="Email"
            type="email"
            value={userEmailInput}
            onChange={(e) => setUserEmailInput(e.target.value)}
          />

          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
          <div className="signup__rmbMe">
            <div>
              <input type="checkbox" id="remmemberMe" name="remmemberMe" />
              <span>Remmember me</span>
            </div>
            <span>Need help?</span>
          </div>

          <h4>
            <span className="signup__gray">New to Netflix?</span>
            <span className="signup__link" onClick={register}>
              Sign up now.
            </span>
          </h4>
          <div>Test acc: sdf@sdf.com / sdf123</div>
        </form>
      </div>
      <div className="signup__gradient"></div>
    </div>
  );
};

export default SignUp;
