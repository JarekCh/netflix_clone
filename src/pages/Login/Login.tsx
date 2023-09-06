import './Login.css';
import Netflix from '../../assets/netflixLogoT.png';
import { useState } from 'react';
import Signup from '../../components/signUp/Signup';

import { Jumbotron, Footer, Faq } from '../../components/';

type Props = {};

const Login = (props: Props) => {
  const [signIn, setSignIn] = useState<boolean>(false);

  return (
    <div className="login">
      <section className="login__background">
        <img className="login__logo" src={Netflix} alt=""></img>
        <button onClick={() => setSignIn(true)} className="login__button">
          Sign In
        </button>
        <div className="login__gradient"></div>
      </section>
      <Jumbotron />
      <Faq />
      <Footer />
      <div className="login__body">
        {signIn ? (
          <Signup />
        ) : (
          <>
            <h1>
              The biggest local and international hits. The best stories. All
              streaming here.
            </h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login__input">
              <form>
                <input type="email" placeholder="Email Adress" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
