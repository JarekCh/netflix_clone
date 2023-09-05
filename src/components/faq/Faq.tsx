import { useState } from 'react';
import './Faq';

type Props = {
  id: number;
  header: string;
  body: string;
};

const Faq = ({ header, body, id }: Props) => {
  const [showItem, setShowItem] = useState<boolean>(false);

  return (
    <div className="faqItem" key={id}>
      <div className="faqItem__header">{header}</div>
      <div>{body}</div>
    </div>
  );
};

export default Faq;
