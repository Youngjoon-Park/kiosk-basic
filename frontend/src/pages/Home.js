import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [message, setMessage] = useState('연결 확인 중...');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 사용자가 입력한 값 POST로 보내기
    axios.post('/api/echo', { message: inputValue })
      .then(response => {
        setMessage(response.data);  // 백엔드에서 응답 받은 메시지
      })
      .catch(error => {
        setMessage('에러 발생!');
      });
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl">{message}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="메시지 입력"
        />
        <button type="submit">보내기</button>
      </form>
    </div>
  );
}

export default Home;
