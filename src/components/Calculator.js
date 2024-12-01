import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Display from './Display';
import Button from './Button';
import OperationButton from './OperationButton';
import { setInput, calculate, clear } from '../redux/actions/calculatorAction';


const Calculator = () => {
  const dispatch = useDispatch();
  const { input, result } = useSelector((state) => state.calculator);

  const handleButtonClick = (value) => {
    dispatch(setInput(value));
  };

  const handleCalculate = () => {
    dispatch(calculate());
  };

  const handleClear = () => {
    dispatch(clear());
  };

  const numericButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  const operationButtons = ['/', '*', '-', '+', '='];

  return (
    <div style={styles.calculator}>
      <Display input={input} result={result} />
      <div style={styles.buttons}>
        {numericButtons.map((btn) => (
          <Button key={btn} label={btn} onClick={() => handleButtonClick(btn)} />
        ))}
        {operationButtons.map((op) =>
          op === '=' ? (
            <OperationButton key={op} label={op} onClick={handleCalculate} />
          ) : (
            <OperationButton key={op} label={op} onClick={() => handleButtonClick(op)} />
          )
        )}
        <Button label="C" onClick={handleClear} />
      </div>
    </div>
  );
};

const styles = {
  calculator: {
    width: '300px',
    margin: '0 auto',
    textAlign: 'center',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
};

export default Calculator;
