import { useEffect, useState } from 'react';
import './ProfilePlans.css';
import { db } from '../../firebase';

type Props = {};

interface Product {
  name: string;
  price: number;
  active: boolean;
}

const ProfilePlans = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    db.collection('products').where('active', '==', true).get().then(querySnapshot => {const products{};
      querySnapshot.forEach(async productDoc => {
        products[productDoc.id] = product.data()
      })
    })
  }, []);
  return <div className="profilePlans">Plans</div>;
};

export default ProfilePlans;
