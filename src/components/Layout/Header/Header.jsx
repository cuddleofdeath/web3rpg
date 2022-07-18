import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <>
        <header className='container--navigation navbar nav'>
          <p className='w3rpglogo'>Web3RPG</p>
          <ul className='nav-links'>
            <li className='links'>
              <a href='#'>About Project</a>
            </li>
            <li className='links'>
              <a href='#'>Class Info</a>
            </li>
            <li className='links'>
              <a href='#'>How to Play</a>
            </li>
            <li className='links'>
              <a href='#'>Connect Wallet</a>
            </li>
          </ul>
        </header>
      </>
    );
  }
}
export default Header;
