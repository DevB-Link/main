import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/Register.css';

function RegisterPage() {

    const [email, setEmail] =useState('');
    const [password, setPassword]= useState('');
    const [userName, setuserName]= useState('');
    const navigate= useNavigate();
    
    const handleSubmit= async (e) => {
        e.preventDefault();
        
        const newUser = {
            userName,
            email,
            password,
        };

        localStorage.setItem('registeredUser', JSON.stringify(newUser));

        alert('회원가입 성공!');
        navigate('/');
    };


    return (
        <div className="register-container">
            <h2>회원가입 페이지</h2>
            <form className="register-input-group" onSubmit={handleSubmit}>
                <div className="input-row">
                    <label>이름 </label>
                    <input type="text"
                            value={userName}
                            onChange={(e) => setuserName(e.target.value)}
                            required />
                </div>
                <div className="input-row">
                    <label>이메일 </label>
                    <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                </div>
                <div className="input-row">
                    <label>비밀번호 </label>
                    <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                </div>
                <button type="submit">가입하기</button>
            </form>
            <div className="login-link">
                <p>이미 계정이 있으신가요? <Link to="/">로그인</Link></p>
            </div>
        </div>
    );
}

export default RegisterPage;
