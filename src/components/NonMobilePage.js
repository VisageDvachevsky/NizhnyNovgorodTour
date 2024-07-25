import React from 'react';

const NonMobilePage = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      color: '#333',
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    card: {
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    message: {
      fontSize: '18px',
      color: '#666',
    },
    icon: {
      fontSize: '48px',
      margin: '20px 0',
      color: '#007bff',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>
          <i className="fas fa-mobile-alt"></i>
        </div>
        <h1 style={styles.heading}>Необходимо мобильное устройство</h1>
        <p style={styles.message}>Пожалуйста, зайдите на этот сайт с мобильного устройства для наилучшего впечатления.</p>
      </div>
    </div>
  );
};

export default NonMobilePage;
