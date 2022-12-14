import React from 'react';
import HeaderCell from '../../atoms/headerCell/headerCell';
import { IHeader } from '../moleculesInterfaces';
import styles from './header.module.css';

const Header: React.FC<IHeader> = ({
  headerValues,
  orientation = 'vertical',
}) => {
  const { HeaderContainer, HeaderContainer__Horizontal } = styles;
  return (
    <div
      className={`${HeaderContainer} ${
        orientation === 'horizontal' && HeaderContainer__Horizontal
      }`}
    >
      {headerValues.map((value) => (
        <HeaderCell
          value={value}
          width={orientation === 'vertical' ? 'small' : 'large'}
        />
      ))}
    </div>
  );
};

export default Header;
