import './App.css';
import Header from './molecules/header/header';
import React from 'react';
import Cell from './atoms/cell/cell';
import Sheet from './organisms/sheet/sheet';

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

  console.log(sumWithInitial);
  return (
    <div className="App">
      {/* <Header headerValues={alphabet} orientation={'horizontal'} />
      <Header headerValues={['1', '2']} orientation={'vertical'} />
      <div className="grid">
        {['1', '2'].map((row) =>
          alphabet.map((column) => <Cell value={column + row} />)
        )}
      </div> */}
      <Sheet />
    </div>
  );
};

export default App;
