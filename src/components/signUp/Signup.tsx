import { useRef } from 'react';
import './SignUp.css';
import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { error } from 'console';

type Props = {};

const Signup = (props: Props) => {
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);

  const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value,
    )
      .then((authUser) => {})
      .catch((err) => alert(err.message));
  };

  const signIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value,
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="singup">
      <form>
        <h1>Sing In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signup__gray">New to Netflix?</span>
          <span className="signup__link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default Signup;
