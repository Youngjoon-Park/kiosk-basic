import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';  // axios 임포트
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Counter from './components/Counter';
import About from './pages/About';

function App() {
  const [user, setUser] = useState(null);  // 사용자 데이터를 저장할 상태 변수
  const [loading, setLoading] = useState(true);  // 로딩 상태 변수
  const [error, setError] = useState(null);  // 에러 상태 변수

  useEffect(() => {
    axios.get('http://localhost:8080/users/1')
      .then(response => {
        console.log("Received User Data: ", response.data);  // 응답 데이터 확인
        if (response.data) {
          setUser(response.data);
        } else {
          setError("No user data found");
        }
        setLoading(false); // ✅ 여기서 로딩 상태 해제
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
        setError("Failed to load user data."); // ✅ 에러 발생 시 상태 설정
        setLoading(false); // ✅ 오류 발생 시 로딩 상태 해제
      });
  }, []);

  // 사용자 데이터를 표시하는 JSX
  const renderUserData = () => {
    if (loading) {
      return <p>Loading user data...</p>;  // ✅ 로딩 상태 처리
    }

    if (error) {
      return <p>{error}</p>;  // ✅ 에러 상태 처리
    }

    if (user) {
      return (
        <div>
          <h2>User Information:</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      );
    } else {
      return <p>No user data found.</p>;  // ✅ 데이터가 없을 경우 처리
    }
  };

  return (
    <Router>
      <Header />
      <Counter /> {/* Counter 추가 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* 사용자 데이터가 로드되면 사용자 정보 표시 */}
      {renderUserData()}
    </Router>
  );
}

export default App;
