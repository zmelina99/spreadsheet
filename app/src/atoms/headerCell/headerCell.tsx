import React from 'react';
import { ICell, IHeaderCell } from '../atomsInterfaces';
import styles from './headerCell.module.css';

const Cell: React.FC<IHeaderCell> = ({ value, width= 'large' }) => {
  const { CellContainer, Cell__Value } = styles;
  console.log(width)
  return (
    <div className={`${CellContainer} ${styles[`CellContainer__${width}`]}`}>
      <span className={Cell__Value}>{value}</span>
    </div>
  );
};

export default Cell;
