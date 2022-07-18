import React from 'react';

const Minter = () => {
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
    <>
      <div ref={printRef} className='item container--minter'>
        Web3RPG
        <div className='item--detail'>
          Name: <input class='item--detail-input' placeholder='Test'></input>
        </div>
        <div class='item--detail'>
          Class:{' '}
          <select className='item--detail-input' placeholder='Character Name'>
            <option value='' disabled selected>
              Select a Class
            </option>
            <option>Investoooor</option>
            <option>Diamond Handooor</option>
            <option>Paper Handooor</option>
            <option>Buildooor</option>
          </select>
        </div>
        <div class='item--detail'>
          Desc: <input class='item--detail-input' placeholder='Test'></input>
        </div>
        <Button />
      </div>
      <div class='item container--minterbg'></div>
    </>
  );
};

export default Minter;
