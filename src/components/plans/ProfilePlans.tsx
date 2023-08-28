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
  addDoc,
} from 'firebase/firestore';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/userSlice';
import { loadStripe } from '@stripe/stripe-js';
import { applyMiddleware } from '@reduxjs/toolkit';

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
  const user = useAppSelector(selectUser);

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

  const loadCheckout = async (priceId: string) => {
    const apiKey = process.env.REACT_APP_STRIPE_APIKEY;
    const docRef = doc(collection(db, 'customer'), user.uid);
    const checkoutSessionRef = collection(docRef, 'checkout_session');
    const newCheckoutSessionRef = await addDoc(checkoutSessionRef, {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    const unsub = onSnapshot(newCheckoutSessionRef, async (snap) => {
      const data = snap.data();
      if (data) {
        const { error, sessionId } = data;

        if (error) {
          // Show an error to customer and inspect your Cloud Function logs in Firebase Console
          alert(`An error occurred: ${error.message}`);
        }

        if (sessionId) {
          // We have a session, let's redirect to Checkout
          // init stripe
          if (apiKey) {
            const stripe = await loadStripe(apiKey);
            stripe?.redirectToCheckout({ sessionId });
          }
        }
      }
    });
    unsub();
  };

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
            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProfilePlans;
