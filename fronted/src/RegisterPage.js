import axios from 'axios';
import React, { useState } from 'react';

function RegisterPage() {

    const [email, setEmail] =useState('');
    const [password, setPassword]= useState('');

    
    const handleSubmit= async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register', {email, password});
            alert (response.data.message);
        } catch (error) {
            alert('회원가입에 실패했습니다.');
        }
    };

    return (
        <div>
            <h2>회원가입 페이지</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <lavel>이메일: </lavel>
                    <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                </div>
                <div>
                    <lavel>비밀번호: </lavel>
                    <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                </div>
                <button type="submit">가입하기</button>
            </form>
        </div>
    );
}

export default RegisterPage;
