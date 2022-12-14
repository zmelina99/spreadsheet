import React from 'react';
import { ICell } from '../atomsInterfaces';
import styles from './cell.module.css';

const Cell: React.FC<ICell> = ({ value }) => {
  const { CellContainer, Cell__Value } = styles;
  return (
    <div className={CellContainer}>
      <span className={Cell__Value}>{value}</span>
    </div>
  );
};

export default Cell;
