import React from 'react'

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
        {label}
    </button>
  );
};

const styles = {
    button: {
      padding: '20px',
      fontSize: '18px',
      cursor: 'pointer',
      border: '1px solid #ccc',
      borderRadius: '5px',
      background: '#f9f9f9',
      color: '#333',
      transition: 'background 0.2s, transform 0.1s',
    },
  };

export default Button;