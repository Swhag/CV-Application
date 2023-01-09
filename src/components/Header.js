import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <HeaderContainer></HeaderContainer>;
  }
}

function HeaderContainer() {
  return (
    <div className='header-container'>
      <div className='header-wrapper'>CV BUILDER</div>
    </div>
  );
}

export default Header;
