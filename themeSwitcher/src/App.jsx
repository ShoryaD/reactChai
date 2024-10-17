import { useState } from 'react';
import './App.css';
import { ThemeProvider } from './contexts/theme';
import { useEffect } from 'react';
import ThemeBtn from './components/Themebtn';
import Card from './components/Card';

function App() {

  const [themeMode, setThemeMode] = useState('light')
  
  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  // Actuel Change in "Theme".

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

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
    <>
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
        Theme Changer
      </div>

      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn /> 
              </div>

              <div className="w-full max-w-sm mx-auto">
                 <Card />      
              </div>
          </div>
      </div>
      </ThemeProvider>

    </>

  );
}

export default App;