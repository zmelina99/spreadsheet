import React from 'react';
import Cell from '../../atoms/cell/cell';
import Header from '../../molecules/header/header';
import { ISheet } from '../interfaces';
import styles from './sheet.module.css';

const Sheet: React.FC<ISheet> = () => {
  const { SheetContainer, SheetContainer__Header, SheetContainer__GridContainer,SheetContainer__Grid } =
    styles;
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const numbers = Array.from(Array(100).keys())
numbers.shift()
  console.log(numbers, 'num')
  return (
    <div className={SheetContainer}>
      <div className={SheetContainer__Header}>
        <Header headerValues={alphabet} orientation="horizontal" />
      </div>
      <div className={SheetContainer__GridContainer}>
        {' '}
        <Header headerValues={numbers} orientation="vertical" />
        <div className={SheetContainer__Grid}>
          {numbers.map((row) =>
            alphabet.map((column) => <Cell id={column + row} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Sheet;
