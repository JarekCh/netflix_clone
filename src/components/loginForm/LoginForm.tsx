import './LoginForm.css';

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <div className="loginForm">
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form>
        <input type="email" placeholder="Email Adress" />
        <button
          onClick={() => console.log('click me more')}
          className="login__getStarted"
        >
          GET STARTED
          <img src="/img/icons/chevron-right.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
