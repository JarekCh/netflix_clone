import { useState } from 'react';
import './Faq';
import faqsData from '../../utils/faqs.json';
import FaqItem from './faqItem/FaqItem';

type Props = {};

const Faq = (props: Props) => {
  const [showItem, setShowItem] = useState<boolean>(false);

  return (
    <div className="faq__container">
      <h1>TItle</h1>
      <div className="faq__frame">
        {faqsData.map((item) => {
          <FaqItem />;
        })}
      </div>
    </div>
  );
};

export default Faq;
