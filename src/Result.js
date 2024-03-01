import React from 'react';
import "./App.css";

function Result(props) {
 const { username } = props;

  const handleBack = () => {
    window.location.href = '/'; // กลับไปหน้า App โดยใช้ window.location.href
  };
  
  return (
    
    <div className="Welcome-message">
      <div className="welcometext">
      <h1>ยินดีด้วยคุณลงทะเบียนสำเร็จแล้ว<br></br> {username}!</h1>
      
</div>

<div className="txtbutton">
      <input type="button" value="ย้อนกลับ" onClick={handleBack} />
    </div>
    </div>
    
  );

  }


export default Result;
