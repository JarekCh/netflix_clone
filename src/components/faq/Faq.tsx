import './Faq.css';
import faqsData from '../../utils/faqs.json';
import FaqItem from './faqItem/FaqItem';

type Props = {};

interface faq {
  id: number;
  header: string;
  body: string;
}

const Faq = ({}: Props) => {
  return (
    <section className="login__faq">
      <div className="faq__container">
        <h1>Frequently Asked Questions</h1>
        <div>
          {faqsData.map((item: faq) => (
            <FaqItem
              key={item.id}
              header={item.header}
              body={item.body}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
