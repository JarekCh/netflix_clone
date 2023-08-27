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

interface Product {
  name: string;
  prices: any;
  active: boolean;
  description: string;
}

const ProfilePlans = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

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
    console.log(products);
  }, []);

  return <div className="profilePlans">Plans</div>;
};

export default ProfilePlans;
