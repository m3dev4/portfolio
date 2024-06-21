"use client"
import React, {useEffect} from 'react'
import "../styles/horlonge.css"
const Horlonge = () => {
    useEffect(() => {
        const hourHand = document.querySelector('.hourHand');
        const minuteHand = document.querySelector('.minuteHand');
        const secondHand = document.querySelector('.secondHand');
        const time = document.querySelector('.time');
        const audio = new Audio('/path/to/your/audio/file.mp3'); // Assurez-vous de remplacer par le bon chemin de votre fichier audio
    
        const setDate = () => {
          const today = new Date();
    
          const second = today.getSeconds();
          const secondDeg = ((second / 60) * 360) + 360;
          if (secondHand) secondHand.style.transform = `rotate(${secondDeg}deg)`;
    
          audio.play();
    
          const minute = today.getMinutes();
          const minuteDeg = ((minute / 60) * 360);
          if (minuteHand) minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    
          const hour = today.getHours();
          const hourDeg = ((hour / 12) * 360);
          if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;
    
          if (time) time.innerHTML = `<span><strong>${hour}</strong> : ${minute} : <small>${second}</small></span>`;
        }
    
        const intervalId = setInterval(setDate, 1000);
        setDate();
    
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
      }, []);
  return (
    <div>
            <div class="clock">
        <div class="hourHand"></div>
        <div class="minuteHand"></div>
        <div class="secondHand"></div>
        <div class="center"></div>
        <div class="time"></div>
        <ul>
            <li><span>1</span></li>
            <li><span>2</span></li>
            <li><span>3</span></li>
            <li><span>4</span></li>
            <li><span>5</span></li>
            <li><span>6</span></li>
            <li><span>7</span></li>
            <li><span>8</span></li>
            <li><span>9</span></li>
            <li><span>10</span></li>
            <li><span>11</span></li>
            <li><span>12</span></li>
        </ul>
    </div>

    <audio src="https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/snares/5[kb]sidestick.aif.mp3" class="audio"   ></audio>


 
    </div>
  )
}

export default Horlonge