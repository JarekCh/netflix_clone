import { useEffect, useState } from 'react';
import './ProfilePlans.css';
import { db } from '../../firebase';
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
  addDoc,
} from 'firebase/firestore';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/userSlice';

type Props = {};

interface Products {
  name: string;
  prices: any;
  active: boolean;
  description: string;
}

interface Subscription {
  role: string;
  current_period_end: number;
  current_period_start: number;
}

const ProfilePlans = (props: Props) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    const sub = collection(db, `customers/${user.uid}/subscriptions`);
    const getPlan = async () => {
      const Plan = await getDocs(sub);
      Plan.forEach(async (sub: any) => {
        const data = sub.data();
        setSubscription({
          role: data.role,
          current_period_end: data.current_period_end.seconds,
          current_period_start: data.current_period_start.seconds,
        });
      });
    };
    getPlan();
  }, []);

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
    const docRef = await addDoc(
      collection(db, `customers/${user.uid}/checkout_sessions`),
      {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      },
    );

    onSnapshot(docRef, (snap) => {
      const data = snap.data();
      if (data?.error) {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the Firebase console.
        alert(`An error occured: ${data.error.message}`);
      }
      if (data?.url) {
        // We have a Stripe Checkout URL, let's redirect.
        window.location.assign(data.url);
      }
    });
  };

  return (
    <div className="profilePlans">
      <br />
      {subscription && (
        <p>
          Renewal date:
          {new Date(
            subscription?.current_period_end * 1000,
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPlan =
          subscription?.role &&
          productData.name?.toLowerCase().includes(subscription?.role);

        return (
          <div
            className={`${
              isCurrentPlan && 'plans__plan--disabled'
            } plans__plan`}
            key={productId}
          >
            <div className="plans__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              {isCurrentPlan ? 'Current Plan' : 'Subscribe'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProfilePlans;
