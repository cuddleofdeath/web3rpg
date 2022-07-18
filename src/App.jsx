import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Minter from './components/Layout/Minter/Minter';
import html2canvas from 'html2canvas';
import './main.css';
import React from 'react';

function App() {
  const [count, setCount] = useState(0);
  const printRef = React.useRef();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div ref={printRef} className='App'>
      <div className='container'>
        <Minter />
      </div>
    </div>
  );
}

export default App;
