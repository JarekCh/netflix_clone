import './Jumbotron.css';
import { FlexDirection } from '../../utils/shared/types';
import useMediaQuery from '../../utils/hooks/useMadiaQuery';

type Props = {
  title: string;
  subTitle: string;
  image: string;
  alt: string;
  direction: FlexDirection;
};

const Jumbotron = ({ title, subTitle, image, alt, direction }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 900px)');

  return (
    <div className="jumbotron__border">
      <div
        className="jumbotron"
        style={{ flexDirection: isAboveMediumScreens ? direction : 'column' }}
      >
        <div className="jumbotron__contentWraper">
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </div>
        <div className="jumbotron__contentWraper">
          <img className="jumbotron__img" src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
