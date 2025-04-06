import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/Home.css';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const HomePage =() => {
    const navigate= useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        //localStorage에서 사용자 정보 가져오기
        const storedUser=localStorage.getItem('user');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        else {
            alert('로그인이 필요합니다.');
            navigate('/');
        }
    }, [navigate]);

    const handleLogout= () => {
        localStorage.removeItem('user');
        alert('로그아웃 되었습니다.');
        navigate('/');
    };

    return (
        <div className="dashboard">             
            {/*왼쪽 사이드바*/}
            <Sidebar user={user} handleLogout={handleLogout} />

            {/*메인 컨텐츠*/}
            <MainContent user={user} />
        </div>
    );
};

export default HomePage;