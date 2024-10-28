
import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbar.js';
import Menu from './Components/Menu.js';

export default function App() {

const [isDayTime, setIsDayTime] = useState(true);
const [currentTime, setCurrentTime] = useState('');


useEffect(() => {
  const checkTime = () => {
    const now = new Date();
    const hours = now.getHours();

    setIsDayTime(hours >= 6 && hours < 18);
    setCurrentTime(now.toLocaleTimeString());}

    //check time immediately
    checkTime();

    // Update every minute
      const interval = setInterval(checkTime, 60000);
    
    // Cleanup interval on component unmount
      return () => clearInterval(interval);
    
  }, []);

  



  return (
    <div className={isDayTime? 'App--day' :'App--night'}>
    <Navbar/>
      <header className="App-header">
        
        <p>
          Current time: {isDayTime}
        </p>
        
      </header>
    </div>
  );
}

;


//{`${isDayTime}?"App--day":"App--night"`}