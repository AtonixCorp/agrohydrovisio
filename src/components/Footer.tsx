import React from 'react';
import SocialMediaIcon from './social/SocialMediaIcon';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <p>© 2022 Robby. All rights reserved.</p>
      <div className="social-media">
        <SocialMediaIcon platform="facebook" />
        <SocialMediaIcon platform="twitter" />
        <SocialMediaIcon platform="instagram" />
      </div>
    </footer>
  );
};

export default Footer;
