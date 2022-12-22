import React from 'react';
import { IHeaderCell } from '../atomsInterfaces';
import styles from './headerCell.module.css';

const Cell: React.FC<IHeaderCell> = ({ value, width = 'large' }) => {
  const { CellContainer, Cell__Value } = styles;
  return (
    <div className={`${CellContainer} ${styles[`CellContainer--${width}`]}`}>
      <span className={Cell__Value}>{value}</span>
    </div>
  );
};

export default Cell;
