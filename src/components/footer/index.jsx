import { Logo, SocialMedia } from '../index';

import { FooterContainer } from './styles';

import Line4 from '../../../public/line-4.svg';

export function Footer() {
  return (
    <FooterContainer>
      <div className="footer">
        <div className="contact-container">
          <Logo />

          <SocialMedia />

          <p>+351 939274154</p>
        </div>

        <div className="informations-links">
          <div className="header-container">
            <h3>Menu</h3>
            <a>Home</a>
            <a>Catalog</a>
            <a>Contact</a>
            <a>Features</a>
          </div>

          <div className="company-container">
            <h3>Company</h3>
            <a>Login</a>
            <a>Sign Up</a>
            <a>Privacy</a>
            <a>Products</a>
          </div>
        </div>

        <div className="newsletter-container">
          <h3>Subscribe Our News Letter</h3>

          <p>
            Sure, please provide your email address to subscribe to newsletter
          </p>

          <div className="subscribe-container">
            <input type="text" placeholder="Enter your mail..." />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="reserved">
        <img src={Line4} alt="line4" />
        <p>© 2024 Developed by Sérgio Oliveira</p>
      </div>
    </FooterContainer>
  );
}
