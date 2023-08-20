import './Login.css';
import Netflix from '../../assets/netflixLogoT.png';

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="login">
      <div className="login__background">
        <img className="login__logo" src={Netflix} alt=""></img>
        <button className="login__button">Sign In</button>
        <div className="login__gradient"></div>
      </div>
      <div className="login__body">
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhare. Cancel at any time.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="login__input">
            <form>
              <input type="email" placeholder="Email Adress" />
              <button className="login__getStarted">GET STARTED</button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
};

export default Login;
