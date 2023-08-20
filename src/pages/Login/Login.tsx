import './Login.css';
import Netflix from '../../assets/netflixLogoT.png';

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="login">
      <div className="login__background">
        <img className="login__logo" src={Netflix} alt=""></img>
      </div>
      <button className="login__button">Sign In</button>
      <div className="login__gradient"></div>
    </div>
  );
};

export default Login;
