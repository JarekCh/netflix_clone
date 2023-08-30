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
  return <div className="jumbotron" style={{ flexDirection: direction }}></div>;
};

export default Jumbotron;
