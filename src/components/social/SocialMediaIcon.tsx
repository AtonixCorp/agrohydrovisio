import React from 'react';
import './SocialMediaIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

interface SocialMediaIconProps {
  platform: 'facebook' | 'twitter' | 'instagram';
}

const iconMap = {
  facebook: faFacebook,
  twitter: faTwitter,
  instagram: faInstagram,
};

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ platform }) => {
  return (
    <a
      href={`https://www.${platform}.com/ofidoobiora`}
      className={`social-media-icon ${platform}`}
    >
      <FontAwesomeIcon icon={iconMap[platform]} />
    </a>
  );
};

export default SocialMediaIcon;
