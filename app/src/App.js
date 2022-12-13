import logo from './logo.svg';
import './App.css';

function App() {
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
