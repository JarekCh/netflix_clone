import './Login.css';
import { useState } from 'react';
import SignUp from '../../components/signUp/SignUp';
import { Jumbotron, Footer, Faq } from '../../components/';
import LoginHeader from '../../components/loginHeader/LoginHeader';

type Props = {};

const Login = (props: Props) => {
  const [signIn, setSignIn] = useState<boolean>(false);

  return (
    <div className="login">
      <LoginHeader />
      <Jumbotron />
      <Faq />
      <Footer />
      <div className="login__body">
        {signIn ? (
          <SignUp />
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
