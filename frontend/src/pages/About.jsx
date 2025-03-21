import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h2>About 페이지</h2>
      <p>키오스크 프로젝트에 대해 소개하는 페이지입니다.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  }
};

export default About;
