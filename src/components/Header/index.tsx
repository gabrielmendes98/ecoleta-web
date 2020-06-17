import React, { InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { IconBaseProps } from 'react-icons/lib';

import logo from '../../assets/logo.svg';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  path: string;
  navIcon?: React.ComponentType<IconBaseProps>;
  navTitle: string;
}

const Header: React.FC<InputProps> = ({ path, navIcon: Icon, navTitle }) => {
  return (
    <header>
      <img src={logo} alt="Ecoleta" />

      <Link to={path}>
        {Icon && <Icon />}
        {navTitle}
      </Link>
    </header>
  );
};

export default Header;
