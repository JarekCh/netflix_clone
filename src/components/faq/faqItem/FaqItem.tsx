import { useState } from 'react';
import './FaqItem.css';

type Props = {
  id: number;
  header: string;
  body: string;
};

const Faq = ({ header, body }: Props) => {
  const [showItem, setShowItem] = useState<boolean>(false);

  const handleClick = () => {
    setShowItem((prevState) => !prevState);
  };

  return (
    <div className="faq">
      <div className="faq__header" onClick={() => handleClick()}>
        {header}
        {showItem ? (
          <img src="/img/icons/close-slim.png" alt="Close" />
        ) : (
          <img src="/img/icons/add.png" alt="Open" />
        )}
      </div>
      <div
        className={`faq__body ${
          showItem ? 'faq__body--open' : 'faq__body--closed'
        }`}
      >
        <span>{body}</span>
      </div>
    </div>
  );
};

export default Faq;
