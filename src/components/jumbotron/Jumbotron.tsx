import './Jumbotron.css';
import { FlexDirection } from '../../utils/shared/types';
import juboData from '../../utils/jumbo.json';
import JumbotronItem from './jumbotronItem/JumbotronItem';

type Props = {};

interface jubo {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  alt: string;
  direction: string;
}

const Jumbotron = (props: Props) => {
  return (
    <section className="login__jubmo">
      {juboData.map((item: jubo) => (
        <JumbotronItem
          key={item.id}
          direction={item.direction as FlexDirection}
          title={item.title}
          image={item.image}
          alt={item.alt}
          subTitle={item.subTitle}
        />
      ))}
    </section>
  );
};

export default Jumbotron;
