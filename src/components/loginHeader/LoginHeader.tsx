import Netflix from '../../assets/netflixLogoT.png';
import './LoginHeader.css';

type Props = {};

const LoginHeader = (props: Props) => {
  return (
    <section className="loginHeader__background">
      {/* top part of header */}
      <div className="loginHeader__top">
        <img className="loginHeader__logo" src={Netflix} alt=""></img>
        <button
          onClick={() => {
            console.log('you clicked me');
          }}
          className="loginHeader__button"
        >
          Sign In
        </button>
      </div>
      {/* bottom part of header */}
      <div className="loginHeader__bottom">
        <h1>
          The biggest local and international hits. The best stories. All
          streaming here.
        </h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
      </div>

      {/* login gradient */}
      <div className="loginHeader__gradient"></div>
    </section>
  );
};

export default LoginHeader;
