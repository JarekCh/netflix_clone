import Netflix from '../../assets/netflixLogoT.png';
import './LoginHeader.css';

type Props = {};

const LoginHeader = (props: Props) => {
  return (
    <section className="loginHeader__background">
      <img className="loginHeader__logo" src={Netflix} alt=""></img>
      <button
        onClick={() => {
          console.log('you clicked me');
        }}
        className="loginHeader__button"
      >
        Sign In
      </button>
      <div className="loginHeader__gradient"></div>
    </section>
  );
};

export default LoginHeader;
