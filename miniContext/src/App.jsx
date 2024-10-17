import { useState } from 'react';
import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [bgColor, setBgColor] = useState('black');
  const [textColor, setTextColor] = useState('white');

  const handleMouseEnter = () => {
    setBgColor('white');
    setTextColor('black');
  };

  const handleMouseLeave = () => {
    setBgColor('black');
    setTextColor('white');
  };

  return (
    <UserContextProvider>
      <div
        style={{
          backgroundColor: bgColor,
          color: textColor,
          padding: '1rem',
          borderRadius: '10px',
          transition: 'background-color 0.6s ease-in-out, color 0.6s ease-in-out',
          cursor: 'pointer',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Context API
      </div>

      <Login />
      <Profile />
      
    </ UserContextProvider>
  );
}

export default App;
