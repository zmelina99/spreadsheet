import React, { useContext } from 'react';
import { SheetsContext } from '../../provider/provider';
import { Types } from '../../provider/provider.interfaces';
import { IOptionsDropdown } from '../atomsInterfaces';
import styles from './actionsDropdown.module.css';

const OptionsDropdown: React.FC<IOptionsDropdown> = ({ options, id }) => {
  const { store, setStore } = useContext(SheetsContext);

  const { OptionsDropdownContainer, OptionsDropdownContainer__Option } = styles;
  const handleClick = (option: string, id: string) => {
    switch (id) {
      case 'bgColor':
        setStore({
          type: Types.changeBgColor,
          payload: {
            id: store.currentCell,
            value: option,
          },
        });
        break;
      case 'fontColor':
        setStore({
          type: Types.changeFontColor,
          payload: {
            id: store.currentCell,
            value: option,
          },
        });
        break;
      default:
        return;
    }
    console.log(store)
  };
  return (
    <div className={OptionsDropdownContainer}>
      {options.map((option) => (
        <button
          className={OptionsDropdownContainer__Option}
          onClick={() => handleClick(option, id)}
          style={{ backgroundColor: option }}
          key={option}
        ></button>
      ))}
    </div>
  );
};

export default OptionsDropdown;
