//register.js

import React, { useState } from 'react';
import videoFile from './Pic/squares_-_1200 (Original).mp4';

function MyRegister() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState(""); 
  const [idCard, setIdCard] = useState("");
  const [telephone, setTelephone] = useState('');
  const [birthday, setBirthday] = useState(""); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState('');
  const [surnameError, setSurnameError] = useState('');
  const [TelephoneError, setTelephoneError] = useState('');
  const [idCardError, setIdCardError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showRegister, setShowRegister] = useState(false);



  const checkPasswordMatch = () => {
    if (password !== confirmPassword) {
      setPasswordError("Password และ Confirmpassword ไม่ตรงกัน");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };
  


  const handleConfirm = () => {
    setShowModal(false);
    window.location.href = './App.js';
  };

  const handleReset = () => {
    setName("");
    setSurname("");
    setIdCard("");
    setGender("");
    setBirthday("");
    setTelephone("");
  }


  const confirmData = () => {
    if (
      name === "" ||
      surname === "" ||
      idCard === "" ||
      gender === "" ||
      birthday === "" ||
      !checkIdCardError(idCard) ||
      !checkTelephoneError(telephone) ||
      !checkPasswordMatch() 
    ) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      setShowModal(true);
      setShowRegister(true);
    }
  };

  const handleNameChange = (e) => {
    const regex = /^[a-zA-Z\u0E00-\u0E7F\s]+$/;
    const value = e.target.value;

    if (!regex.test(value) && value !== '') {
      setNameError('กรุณากรอกเฉพาะตัวอักษรเท่านั้น');
    } else {
      setNameError('');
      setName(value);
    }
  };

  const handleSurnameChange = (e) => {
    const regex = /^[a-zA-Z\u0E00-\u0E7F\s]+$/;
    const value = e.target.value;

    if (!regex.test(value) && value !== '') {
      setSurnameError('กรุณากรอกเฉพาะตัวอักษรเท่านั้น');
    } else {
      setSurnameError('');
      setSurname(value);
    }
  };


  const formatIdCard = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{1})?(\d{4})?(\d{5})?(\d{2})?(\d{1})?/, function(match, p1, p2, p3, p4, p5) {
      var parts = [];
      if (p1) parts.push(p1);
      if (p2) parts.push(p2);
      if (p3) parts.push(p3);
      if (p4) parts.push(p4);
      if (p5) parts.push(p5);
      return parts.join('-');
    });
  }

 

 
  const checkIdCardError = (value) => {
    const idCardPattern = /^\d{1}-\d{4}-\d{5}-\d{2}-\d{1}$/;
    if (!idCardPattern.test(value) && value !== '') {
      setIdCardError('รูปแบบที่ป้อนไม่ถูกต้อง');
      return false; 
    } else {
      setIdCardError('');
      return true; 
    }
  }
 
  const handleIdCardChange = (e) => {
    const { value } = e.target;
    const formattedIdCard = formatIdCard(value);
    setIdCard(formattedIdCard);
    checkIdCardError(formattedIdCard);
  }
  
  const checkTelephoneError = (value) => {
    const telephonePattern = /^0\d{9}$/;
    if (!telephonePattern.test(value) && value !== '') {
      setTelephoneError('กรุณากรอกเบอร์โทร');
      return false;
    } else {
      setTelephoneError('');
      return true;
    }
  };
  
  const handleTelephoneChange = (e) => {
    const { value } = e.target;
    const formattedTelephone = value.replace(/\D/g, ''); 
    setTelephone(formattedTelephone); 
    checkTelephoneError(formattedTelephone);
    
  };
  
      



  const handleBack = () => {
    window.location.href = '/'; 
  };

  return (
    
    <div>
    <video autoPlay loop muted className="video-bg">
    <source src={videoFile}type="video/mp4" />
    Your browser does not support the video tag.
  </video>
    <div class ="Registerbg">
        <div class="Register">
        <h1>ลงทะเบียน</h1>
        <div class="input">
          <p>ขื่อ</p>
          <input  type="text"  name="name"  value={name}  onChange={handleNameChange} />
      {nameError && <p class ="err">{nameError}</p>}
        </div>

        <div class="input">
          <p>นามสกุล</p>
          <input type="text"  name="surname"  value={surname}  onChange={handleSurnameChange} />
      {surnameError && <p class ="err">{surnameError}</p>}
        </div>

        <div className="input">
              <p>เลขบัตรประจำตัวประชาชน</p>
              <input  type="text"  name="idCard"  value={idCard}  onChange={handleIdCardChange}/>
              {idCardError && <p class ="err">{idCardError}</p>}

            </div>

       
          
<div class="input">
    <p>เบอร์โทรศัพท์</p>
    <input type="text" name="telephone" value={telephone} onChange={handleTelephoneChange} />
    {TelephoneError && <p className="err">{TelephoneError}</p>}
</div>

       

        <div class="input">
          <p>วันเกิด</p>
        <input type="date" id="birthday" name="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} max={new Date().toISOString().split("T")[0]} /> 
        </div>

        <div class="input">
          <p>เพศ</p>
          <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">โปรดเลือก</option>
                <option value="male">ชาย</option>
                <option value="female">หญิง</option>
                <option value="more">อื่นๆ</option>
              </select>
        </div>

        <div class="input">
          <p>username</p>
          <input type="text"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          ></input>
        </div>

        <div className="input">
  <p>Password</p>
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
</div>

<div className="input">
  <p>Confirmpassword</p>
  <input
    type="password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />
  {passwordError && <p className="err">{passwordError}</p>}
</div>


<br></br>
        <div class="mybutton">
        <input type="button" value="ตรวจสอบ" onClick={confirmData} className="confirm-button" />
        </div>
        <div class="mybutton">
        <input type="reset" value="รีเซ็ต" onClick={handleReset}/>
        </div>
        <div class="mybutton">
        <input type="button" value="ย้อนกลับ" onClick={handleBack} />
        </div>
      </div>
    

    
  </div>
  {showModal && (
      <div className="modal">
        <div className="modal-content">
          <p className=" accept">คุณแน่ใจว่าต้องการยืนยันข้อมูล?</p>
          <div className="modal-buttons">
            <button onClick={handleConfirm}>ใช่</button>
            <button class ="notaccept"onClick={() => setShowModal(false)}>ไม่</button>
          </div>
        </div>
      </div>
    )}

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

export default MyRegister;
