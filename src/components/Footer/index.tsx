import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './styles.css';

const Footer: React.FC = () => {
  return (
      <div className="container-footer">
          <div className="line-footer"></div>
          <FaGithub />
      </div>
  );
}

export default Footer;