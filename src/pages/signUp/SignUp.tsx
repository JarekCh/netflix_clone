import { useRef } from 'react';
import './SignUp.css';
import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Netflix from '../../assets/netflixLogoT.png';
import { useNavigate } from 'react-router-dom';

type Props = {};

const SignUp = (props: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(
      auth,
      emailRef.current?.value ?? '',
      passwordRef.current?.value ?? '',
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => alert(err.message));
  };

  const signIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await signInWithEmailAndPassword(
      auth,
      emailRef.current?.value ?? '',
      passwordRef.current?.value ?? '',
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => alert(err.message));
    navigate('/', { replace: true });
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
          <input ref={emailRef} placeholder="Email" type="email"></input>
          <input ref={passwordRef} placeholder="Password" type="password" />
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
