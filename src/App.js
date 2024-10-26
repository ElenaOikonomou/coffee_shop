
import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbar';

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
    <div className="App">
    <Navbar/>
      <header className="App-header">
        
        <p>
          Welcome to the best coffee place!
        </p>
        
      </header>
    </div>
  );
}

;
