import React, { useContext } from 'react';
import { useState } from 'react';
import { SheetsContext } from '../../provider/provider';
import { Types } from '../../provider/provider.interfaces';
import { ICell } from '../atomsInterfaces';
import styles from './cell.module.css';

const Cell: React.FC<ICell> = ({ id }) => {
  const { store, setStore } = useContext(SheetsContext);
  const [value, setValue] = useState<string>(store[id] ? store[id]?.value : '');

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      if (value[0] === '+' || value[0] === '=') {
        eval(value);
        setValue(eval(value));
        setStore({
          type: Types.generateOperation,
          payload: {
            id: event.target.name,
            value: value,
          },
        });
      }
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setStore({
      type: Types.generateOperation,
      payload: {
        id: event.target.name,
        value: event.target.value,
      },
    });
  };

  const { CellContainer, Cell__Value } = styles;
  console.log(value, store, id, store[id]);
  return (
    <div className={CellContainer}>
      <input
        className={Cell__Value}
        name={id}
        value={value}
        onChange={(event) => handleChange(event)}
        onKeyDown={(event) => handleKeyDown(event)}
      />
    </div>
  );
};

export default Cell;
