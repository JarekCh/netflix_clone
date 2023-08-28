import { useEffect, useState } from 'react';
import './ProfilePlans.css';
import { db } from '../../firebase';
import {
  QuerySnapshot,
  QueryDocumentSnapshot,
  collection,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  getDocs,
} from 'firebase/firestore';

type Props = {};

interface Products {
  name: string;
  prices: any;
  active: boolean;
  description: string;
}

interface Product {
  [productId: string]: Products;
}

const ProfilePlans = (props: Props) => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const productsRef = collection(db, 'products');
    const isActive = query(productsRef, where('active', '==', true));
    const getProducts = async () => {
      const products: any = {};
      const querySnapshot = await getDocs(isActive);
      querySnapshot.forEach(async (productDoc: any) => {
        products[productDoc.id] = productDoc.data();
        const priceSnap = await getDocs(collection(productDoc.ref, 'prices'));
        priceSnap.forEach((price) => {
          products[productDoc.id].prices = {
            priceId: price.id,
            priceData: price.data(),
          };
        });
      });
      setProducts(products);
    };
    getProducts();
  }, []);
  console.log(products);

  return (
    <div className="profilePlans">
      {Object.entries(products).map(([productId, productData]) => {
        // TODO add logic to check if the user subscription is
        return (
          <div className="plans__plan" key={productId}>
            <div className="plans__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProfilePlans;
