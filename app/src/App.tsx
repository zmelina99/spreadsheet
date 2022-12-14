import './App.css';
import Header from './molecules/header/header';
import React from 'react';
import Cell from './atoms/cell/cell';

const App: React.FC = () => {
  //columns
  //https://plainenglish.io/blog/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  console.log(alphabet);

  //   const columns = ['a', 'b', 'c']
  // const rows = [1, 2, 3]

  // const mapper =  columns.map((column) => (
  //   rows.map((row) => (
  //   console.log(column+row)
  //   ))
  // ))

  //rows

  //suma
  let text = '1+1+1+1';
  const myArray = text.split('+');
  console.log(myArray);

  const sumWithInitial = myArray.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
    0
  );

  const grid: any[] = [];
  for (let row = 0; row < alphabet.length; row++) {
    grid.push([] as any);
    for (let col = 0; col < 2; col++) {
      grid[row].push(<Cell value={`${col}${row}`} />);
    }
  }

  console.log(sumWithInitial);
  return (
    <div className="App">
      <Header headerValues={alphabet} orientation={'horizontal'} />
      <Header headerValues={['1', '2']} orientation={'vertical'} />
      {/* <div className="grid">
        {alphabet.map((column) =>
          ['1', '2'].map((row) => <Cell value={column + row} />)
        )}
      </div> */}
      <div className="grid">{grid}</div>
    </div>
  );
};

export default App;
