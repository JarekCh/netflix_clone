import Home from './pages/Home/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import Profile from './pages/Profile/Profile';
import SharedLayout from './pages/SharedLayout';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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
        dispatch(logout);
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
