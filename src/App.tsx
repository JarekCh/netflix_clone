import Home from './pages/Home/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './pages/Profile/Profile';
import SharedLayout from './pages/SharedLayout';
import { useAppDispatch, useAppSelector } from './app/hooks';

// TODO
// fix responsivnes
// add possibility to move movies
// add loader for payment plans
// fix cloud firestore rules
// fix any
// add comments for html and functions
// sdf@sdf.com / sdf123
//add code optimization memo/callback/lazyLoading
// create component for faq and jumbotron

function App() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //log in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          }),
        );
      } else {
        //log off
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
