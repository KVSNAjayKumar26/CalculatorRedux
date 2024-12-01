import React from 'react'

const OperationButton = ({ label, onClick }) => {
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
        background: '#ffd700',
        color: '#333',
        fontWeight: 'bold',
        transition: 'background 0.2s, transform 0.1s',
    },
};

export default OperationButton;