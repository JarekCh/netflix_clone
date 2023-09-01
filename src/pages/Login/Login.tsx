import './Login.css';
import Netflix from '../../assets/netflixLogoT.png';
import { useState } from 'react';
import Signup from '../../components/signUp/Signup';
import juboData from '../../utils/jumbo.json';
import { Jumbotron, Footer } from '../../components/';
import { FlexDirection } from '../../utils/shared/types';

type Props = {};

interface jubo {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  alt: string;
  direction: string;
}

const Login = (props: Props) => {
  const [signIn, setSignIn] = useState<boolean>(false);
  console.log(juboData);

  return (
    <div className="login">
      <section className="login__background">
        <img className="login__logo" src={Netflix} alt=""></img>
        <button onClick={() => setSignIn(true)} className="login__button">
          Sign In
        </button>
        <div className="login__gradient"></div>
      </section>
      <section className="login__jubmo">
        {juboData.map((item: jubo) => (
          <Jumbotron
            key={item.id}
            direction={item.direction as FlexDirection}
            title={item.title}
            image={item.image}
            alt={item.alt}
            subTitle={item.subTitle}
          />
        ))}
      </section>
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
