import React, { useContext } from 'react';
import { useState } from 'react';
import { SheetsContext } from '../../provider/provider';
import { Types } from '../../provider/provider.interfaces';
import { ICell } from '../atomsInterfaces';
import styles from './cell.module.css';

const Cell: React.FC<ICell> = ({ id }) => {
  const { store, setStore } = useContext(SheetsContext);
  const [value, setValue] = useState<number | string>(
    store.values[id] ? store.values[id]?.value : ''
  );
  const [isDisabled, setIsDisabled] = useState(true);
  const [isOpenOperation, setIsOpenOperation] = useState(false);

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13 || event._reactName === 'onBlur') {
      if (typeof value !== 'number') {
        if (value[0] === '+' || value[0] === '=') {
          setIsOpenOperation(true);
          setValue(processString(value.substring(1)));
          setStore({
            type: Types.generateOperation,
            payload: {
              id: event.target.name,
              value: processString(value.substring(1)),
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
        value: Number(event.target.value),
      },
    });
  };

  const cellClicked = () => {
    setIsDisabled(false);
  };

  function processString(str: string) {
    console.log(store);
    let result = 0;
    let number = '';
    let i = 0;
    let storeValue = '';
    while (i < str.length) {
      console.log(number, 'number in while');
      const c = str[i];
      if (i === 0 && isNaN(parseInt(str[i + 1]))) {
        result = parseInt(c);
      }
      if (number.length && !isNaN(parseInt(c))) {
        number = number + c;
        if (str[i + 1] === '+' || str[i + 1] === '-' || i === str.length - 1) {
          console.log(number, 'number', str[4], i);
          if (str[i - number.length] === '+') {
            result = result + parseInt(number);
            number = '';
          } else if (str[i - number.length] === '-') {
            result = result - parseInt(number);
            number = '';
          } else {
            result = result + parseInt(number);
            number = '';
          }
        }
      }
      if (!isNaN(parseInt(c)) && !isNaN(parseInt(str[i + 1]))) {
        number = number + c;
      }
      if (
        !isNaN(parseInt(c)) &&
        (str[i - 1] === '-' || str[i - 1] === '+') &&
        !number.length
      ) {
        //if the operator is minus
        if (str[i - 1] === '-') {
          result = result - parseInt(c);
        }
        //if the operator is plus
        else result = result + parseInt(c);
      } else if (!isNaN(parseInt(c)) && storeValue.length) {
        storeValue = storeValue + str[i];
        if (i === str.length - 1) {
          result = result + store.values[storeValue.toUpperCase()].value;
        }
      }
      if (str[i].match(/[a-z]/)) {
        storeValue = storeValue + str[i].toUpperCase();
      }
      if ((c === '+' || c === '-') && storeValue.length) {
        if (c === '-') result = result - store.values[c].value;
        else result = result + store.values[c].value;
        storeValue = '';
      }
      if (c === '+' || c === '-') console.log('hi');
      i++;
    }
    return result;
  }
//sumar y restar numeros de tres cifras anda mal 


  const { CellContainer, Cell__Value } = styles;
  return (
    <div className={CellContainer} onClick={cellClicked}>
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
      />
    </div>
  );
};

export default Cell;
