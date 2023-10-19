import { useRef, useState } from 'react';
import './SignUp.css';
import { auth } from '../../firebase';
import { updateProfile } from 'firebase/auth';
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

// Input outline to change depned of field validation

const SignUp = (props: Props) => {
  const userEmail = useAppSelector(selectUserEmail);
  const [userEmailInput, setUserEmailInput] = useState<string>(userEmail);
  const [userPassword, setUserPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isInvalid = userPassword === '' || userEmailInput === '';

  const clearEamil = () => {
    dispatch(resetEmail());
    setUserEmailInput('');
    setUserPassword('');
  };

  const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, userEmailInput, userPassword)
      .then(() => {
        navigate('/', { replace: true });
        clearEamil();
      })
      .then(() => {
        if (auth.currentUser) {
          const user = ['user1', 'user2', 'user3', 'user4', 'user5'];
          updateProfile(auth.currentUser, {
            displayName: user[Math.floor(Math.random() * user.length)],
            photoURL: (Math.floor(Math.random() * 5) + 1).toString(),
          })
            .then(() => {
              console.log('Profile updated!');
            })
            .catch((error: any) => {
              console.log(error);
            });
        }
      })
      .catch((err) => setError(err.message));
  };

  const signIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, userEmailInput, userPassword)
      .then(() => {
        navigate('/', { replace: true });
        clearEamil();
      })
      .catch((err) => setError(err.message));
    console.log(error);
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
          {error && <div className="signup__error">{error}</div>}
          <input
            placeholder="Email"
            type="email"
            value={userEmailInput}
            onChange={(e) => setUserEmailInput(e.target.value)}
          />

          <input
            placeholder="Password"
            type="password"
            autoComplete="off"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} disabled={isInvalid}>
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
