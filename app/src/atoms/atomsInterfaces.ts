import React from 'react';

export interface ICell {
  id: string;
  selectedCell: string;
  setSelectedCell: React.Dispatch<React.SetStateAction<string>>;
}

export interface IHeaderCell {
  value: string | number;
  width: 'small' | 'large';
}
export interface IOptionsDropdown {
  options: string[];
  id: 'bgColor' | 'fontColor';
}
