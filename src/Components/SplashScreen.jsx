import React from 'react';
// import IMAGE from '../images/Logo'; // Correct path to the image

const SplashScreen = () => {
  return (
    <div style={styles.container}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-cXFuavrc6SQ1s7DJvs55FQ-BF0bqYSM-iw&s" alt="Logo"  />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: '150px',
  },
};

export default SplashScreen;
