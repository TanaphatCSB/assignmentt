//app.js

import React, { useState } from 'react';
import "./App.css";
import Result from './Result'; // นำเข้าคอมโพเนนต์ Result
import Register from './Register'; // นำเข้าคอมโพเนนต์ Register
import videoFile from './Pic/squares_-_1200 (Original).mp4';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showAlert, setShowAlert] = useState(false);


  

  const confirmData = () => {
    if (username === "" || password === "") {
      setShowAlert(true);

    } else {
      setShowAlert(false);
      setLoggedIn(true);
    }
  };

  const handleLogin = () => {
    confirmData();
    setLoggedIn(true); // เพิ่มบรรทัดนี้
  };
  

  const handleRegister = () => {
    setShowRegister(true);
  };

  return (
    <div>
      <video autoPlay loop muted className="video-bg">
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!loggedIn && !showRegister && (
        <div className="bigLoginbackground">
          <div className="Loginbackground">
            <div className="Login">
              <h1>แบบทดสอบ</h1>
              <div className="txtbox">
                <p>Username</p>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
              </div>

              <div className="txtbox">
                <p>Password</p>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <br />
              <div className="txtbutton">
                <input type="button" value="เข้าสู่ระบบ" className="Login-button" onClick={handleLogin} />
              </div>
              <br />
              <div className="gotoregister">
                <p>ยังไม่มีบัญชีผู้ใช้ไหม? ไปที่ <input type="button" value="ไปที่ลงทะเบียน" className="Register-button" onClick={handleRegister} /></p>
              </div>
            </div>
          </div>
        </div>
      )}
      {loggedIn && <Result username={username} />}
      {showRegister && <Register />}

      {showAlert && (
        <div className="alert">
          <div className="alert-content">
            <h3>ข้อมูลของคุณผิดพลาด</h3>
            <p>กรุณากรอกข้อมูลให้ครบหรือกรอกข้อมูลให้ถูกต้อง</p>
            <button onClick={() => setShowAlert(false)}>ตกลง</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
