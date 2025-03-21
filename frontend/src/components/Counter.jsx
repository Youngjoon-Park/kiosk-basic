import React from 'react';
import useStore from '../store';

const Counter = () => {
  const { count, increaseCount, decreaseCount, resetCount } = useStore();

  return (
    <div style={styles.container}>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={increaseCount} style={styles.button}>+</button>
        <button onClick={decreaseCount} style={styles.button}>-</button>
        <button onClick={resetCount} style={styles.resetButton}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  resetButton: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Counter;
