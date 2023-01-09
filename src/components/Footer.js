import React, { Component } from 'react';

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <FooterContainer>
        <p>Copyright © 2023 Swhag</p>
      </FooterContainer>
    );
  }
}

function FooterContainer() {
  return (
    <div className='footer-container'>
      <p>Copyright © 2023 Swhag</p>
    </div>
  );
}

export default Footer;
