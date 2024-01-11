// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    const loadText = document.querySelector('.loading-text');
    const bg = document.querySelector('.bg');

    const interval = setInterval(() => {
      setLoad((prevLoad) => {
        const newLoad = prevLoad + 1;

        if (newLoad > 99) {
          clearInterval(interval);
        }

        loadText.innerText = `${newLoad}%`;
        loadText.style.opacity = scale(newLoad, 0, 100, 1, 0);
        bg.style.filter = `blur(${scale(newLoad, 0, 100, 30, 0)}px)`;

        return newLoad;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  return (
    <>
      <section className="bg"></section>
      <div className="loading-text">{load}%</div>
    </>
  );
}

export default App;
