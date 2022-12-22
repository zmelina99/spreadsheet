import { Store } from '../provider/provider.interfaces';

export const processString = (str: string, store: Store) => {
  let solution = 0;
  let number = '';
  let i = 0;
  let storeValue = '';
  let storeIndex = 0;

  if (str.match(/[^a-zA-Z0-9+-]/)) return 'Error';

  while (i < str.length) {
    const current = str[i];
    //if the first element is followed by an operator
    //Add the value to the solution
    if (i === 0 && isNaN(parseInt(str[i + 1]))) {
      solution = parseInt(current);
    }

    //If there is a 2 digit or longer number and the current is a number and there is not a store value
    //Save it in the number variable
    if (number.length && !isNaN(parseInt(current)) && !storeValue.length) {
      number = number + current;

      //If the following value is an operator or if it's the last value of the string,
      //Perfrom the operation with the solution
      if (str[i + 1] === '+' || str[i + 1] === '-' || i === str.length - 1) {
        if (str[i - number.length] === '+') {
          solution += parseInt(number);
          number = '';
        } else if (str[i - number.length] === '-') {
          solution -= parseInt(number);
          number = '';
        } else {
          solution += parseInt(number);
          number = '';
        }
      }
    }

    //If current is a number and the next value is a number too
    //Save it in the number variable
    if (
      !isNaN(parseInt(current)) &&
      !isNaN(parseInt(str[i + 1])) &&
      !number.length &&
      !storeValue.length
    ) {
      number += current;
    }

    //If current is a number and the previous value is an operator and there is no number variable
    //Perfrom the operation with the solution
    if (
      !isNaN(parseInt(current)) &&
      (str[i - 1] === '-' || str[i - 1] === '+') &&
      !number.length
    ) {
      if (str[i - 1] === '-') {
        solution = solution - parseInt(current);
      } else solution = solution + parseInt(current);
    }

    //If current is a number and there is a store value
    //Save the number in the store variable
    else if (!isNaN(parseInt(current)) && storeValue.length) {
      storeValue = storeValue + str[i];
      // If it is the last element of the string, perform the operation with the solution
      if (
        storeValue.length &&
        str[storeIndex - 1] === '-' &&
        isNaN(parseInt(str[i + 1])) &&
        store.values[storeValue.toUpperCase()].value
      ) {
        solution =
          solution - Number(store.values[storeValue.toUpperCase()].value);
        storeValue = '';
      } else if (
        i === str.length - 1 &&
        store?.values[storeValue.toUpperCase()]?.value?.length
      ) {
        solution += Number(store.values[storeValue.toUpperCase()].value);
      }
    }
    //If current is a letter, add it to the store value variable
    if (current.match(/[a-z]/)) {
      storeValue = storeValue + current.toUpperCase();
      storeIndex = i;
    }

    //If current is an operator and there is a store value
    //perform the operation
    if ((current === '+' || current === '-') && storeValue.length) {
      if (store?.values[current]?.value?.length) {
        if (current === '-') solution -= Number(store.values[current].value);
        else solution += Number(store.values[current].value);
      }
      storeValue = '';
    }

    i++;
  }

  if (isNaN(solution)) return 'Error';
  return String(solution);
};

export const procesSelectedCell = (
  currentCellValue: string,
  selected: string,
  store: Store
) => {
  const proccessStringResult = processString(currentCellValue, store);
  let result = Number(proccessStringResult);
  const selectedValue = store.values[selected].value;

  if (!selectedValue.length) {
    return String(result);
  }
  if (currentCellValue[currentCellValue.length - 1] === '+') {
    result += Number(selectedValue);
  } else result -= Number(selectedValue);
  return String(result);
};
