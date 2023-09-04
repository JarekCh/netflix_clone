import { useState } from 'react';
import './Faq';

type Props = {};

const Faq = (props: Props) => {
  const [showItem, setShowItem] = useState<boolean>(false);

  return <div className="faq__container">Faq</div>;
};

export default Faq;
