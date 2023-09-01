import './Footer.css';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <p className="footer__title">Questions? Contact us.</p>
      <div className="footer__break" />
      <div className="footer__row">
        <div className="footer__column">
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Legal Notices</a>
        </div>

        <div className="footer__column">
          <a href="#">Help Centre</a>
          <a href="#">Job</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
          <a href="#">Only on Netflix</a>
        </div>

        <div className="footer__column">
          <a href="#">Account</a>
          <a href="#">Redeem Gift Cards</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
          <a href="#">Ad Choices</a>
        </div>

        <div className="footer__column">
          <a href="#">Media Center</a>
          <a href="#">Buy Gift Cards</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Legal Guarantee</a>
        </div>
      </div>
      <div className="footer__break" />
      <p className="footer__text">Netflix Poland</p>
    </div>
  );
};

export default Footer;
