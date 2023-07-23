import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Notification from './components/Notification';
import { useBoundStore } from './stores';
import { useEffect } from 'react';
import ProgressBar from './components/ProgressBar';
const App = () => {
  const { isLoggedIn, initUser } = useBoundStore((state) => ({
    isLoggedIn: state.isLoggedIn,
    initUser: state.initUser,
  }));
  useEffect(() => {
    initUser();
  }, []);

  return (
    <div className="App mx-auto">
      <Notification />
      {isLoggedIn && (
        <>
          <ProgressBar />
          <NavBar />
        </>
      )}
      <Outlet />
    </div>
  );
};
export default App;
