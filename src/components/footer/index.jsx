import { Logo, SocialMedia } from '../index';

import Line4 from '../../../public/line-4.svg';

import { FooterContainer } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <div className="footer">
        <div className="container-contact">
          <Logo />

          <SocialMedia />

          <p>+351 939274154</p>
        </div>

        <div className="container-header">
          <h3>Menu</h3>
          <a>Home</a>
          <a>Catalog</a>
          <a>Contact</a>
          <a>Features</a>
        </div>

        <div className="container-company">
          <h3>Company</h3>
          <a>Login</a>
          <a>Sign Up</a>
          <a>Privacy</a>
          <a>Products</a>
        </div>

        <div className="container-newsletter">
          <h3>Subscribe Our News Letter</h3>

          <p>
            Sure, please provide your email address to subscribe to newsletter
          </p>

          <div className="container-subscribe">
            <input type="text" placeholder="Enter your mail..." />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="reserved">
        <img src={Line4} alt="line4" />
        <p>©2024 Developer by Sérgio Oliveira</p>
      </div>
    </FooterContainer>
  );
}