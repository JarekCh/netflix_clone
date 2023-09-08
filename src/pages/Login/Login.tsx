import './Login.css';
import { Jumbotron, Footer, Faq } from '../../components/';
import LoginHeader from '../../components/loginHeader/LoginHeader';

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="login">
      <LoginHeader />
      <Jumbotron />
      <Faq />
      <Footer />
    </div>
  );
};

export default Login;
