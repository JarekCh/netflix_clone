import './Jumbotron.css';
import { FlexDirection } from '../../utils/shared/types';

type Props = {
  title: string;
  subTitle: string;
  image: string;
  alt: string;
  direction: FlexDirection;
};

const Jumbotron = ({ title, subTitle, image, alt, direction }: Props) => {
  return (
    <div className="jumbotron" style={{ flexDirection: direction }}>
      <div className="jumbotron__contentWraper">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
      <div className="jumbotron__contentWraper">
        <img className="jumbotron__img" src={image} alt={alt} />
      </div>
    </div>
  );
};

export default Jumbotron;
