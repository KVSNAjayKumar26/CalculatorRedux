import React from 'react'

const Display = ({ input, result }) => {
    return (
        <div style={styles.display}>
            <div>{input || result || '0'}</div>
        </div>
    );
};

const styles = {
    display: {
        background: '#e0e0e0',
        padding: '20px',
        fontSize: '24px',
        marginBottom: '10px',
        textAlign: 'right',
        overflow: 'hidden',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
};

export default Display;