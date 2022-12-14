import React from 'react';
import { ICell } from '../atomsInterfaces';
import styles from './cell.module.css';

const Cell: React.FC<ICell> = ({ id }) => {
  const { CellContainer, Cell__Value } = styles;
  return (
    <div className={CellContainer}>
      <span className={Cell__Value}>{id}</span>
    </div>
  );
};

export default Cell;
