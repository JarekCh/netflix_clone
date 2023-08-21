import './SignUp.css';

type Props = {};

const Signup = (props: Props) => {
  const register = (e: Event) => {
    e.preventDefault();
  };

  const signIn = (e: Event) => {
    e.preventDefault();
  };

  return (
    <div className="singup">
      <form>
        <h1>Sing In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signup__gray">New to Netflix?</span>
          <span className="signup__link"> Sign up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default Signup;
