import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { SheetsContext } from '../../provider/provider';
import { Types } from '../../provider/provider.interfaces';
import { processString } from '../../utilities/utilities';
import { ICell } from '../atomsInterfaces';
import styles from './cell.module.css';

const Cell: React.FC<ICell> = ({ id, setSelectedCell, selectedCell }) => {
  const { CellContainer, Cell__Value } = styles;
  const { store, setStore } = useContext(SheetsContext);
  const [value, setValue] = useState<string>(
    store.values[id] ? store.values[id]?.value : ''
  );
  const [isDisabled, setIsDisabled] = useState(true);

  const handleKeyDown = (event: any) => {
    if (typeof value !== 'number') {
      if (event.keyCode === 13 || event._reactName === 'onBlur') {
        if (typeof value === 'string')
          if (value[0] === '+' || value[0] === '=') {
            setValue(processString(value.substring(1), store));
            setStore({
              type: Types.generateOperation,
              payload: {
                id: event.target.name,
                value: processString(value.substring(1), store),
              },
            });
          }
        setIsDisabled(true);
      } else return;
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

  const handleClick = () => {
    setIsDisabled(false);
    setSelectedCell(id);
  };

  const handleDoubleClick = () => {
    setStore({
      type: Types.setCurrentCell,
      payload: {
        value: id,
      },
    });
  };

  useEffect(() => {
    setSelectedCell(selectedCell);
  }, [selectedCell, setSelectedCell]);

  return (
    <div
      className={CellContainer}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      tabIndex={0}
    >
      <input
        className={Cell__Value}
        name={id}
        value={value}
        onChange={(event) => handleChange(event)}
        onKeyDown={(event) => handleKeyDown(event)}
        onBlur={(event) => {
          handleKeyDown(event);
          setIsDisabled(true);
        }}
        disabled={isDisabled}
        style={{
          backgroundColor: store?.values[id]?.bgColor
            ? store?.values[id]?.bgColor
            : 'white',
          color: store?.values[id]?.fontColor
            ? store?.values[id]?.fontColor
            : 'black',
        }}
      />
    </div>
  );
};

export default Cell;
