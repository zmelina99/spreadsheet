import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './actionsHeader.module.css';
import { faFill, faFont } from '@fortawesome/free-solid-svg-icons';
import { ActionsDropdown } from '../../atoms/actionsDropdown';

const ActionsHeader: React.FC = () => {
  const {
    ActionsHeader__Container,
    ActionsHeader__Title,
    ActionsHeader__Button,
    ActionsHeader__DropdownContainer,
  } = styles;

  const [title, setTitle] = useState('');
  const [showBgColor, setShowBgColor] = useState(false);
  const [showFontColor, setShowFontColors] = useState(false);

  const colorOptions = ['#FEFCF3', '#F5EBE0', '#F0DBDB', '#DBA39A'];

  return (
    <div className={ActionsHeader__Container}>
      <input
        className={ActionsHeader__Title}
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        placeholder={'Click to add Title!'}
      ></input>
      <button
        onClick={() => setShowBgColor(!showBgColor)}
        className={ActionsHeader__Button}
      >
        <FontAwesomeIcon icon={faFill} />
        {showBgColor && (
          <div className={ActionsHeader__DropdownContainer}>
            <ActionsDropdown id="bgColor" options={colorOptions} />
          </div>
        )}
      </button>
      <button
        onClick={() => setShowFontColors(!showFontColor)}
        className={ActionsHeader__Button}
      >
        <FontAwesomeIcon icon={faFont} />
        {showFontColor && (
          <div className={ActionsHeader__DropdownContainer}>
            <ActionsDropdown id="fontColor" options={colorOptions} />{' '}
          </div>
        )}
      </button>
    </div>
  );
};

export default ActionsHeader;
