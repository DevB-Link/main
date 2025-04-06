import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';


const Sidebar= ({user,handleLogout}) => {
    return (
        <div>
            <div className="side-top">
                <img src="/blink-logo2.png" alt='' className="logo2"/>
                <img src="/blink-logo3.png" alt='' className="logo3" />
            </div>
            <aside className="sidebar">
                <nav className="main-menu">
                    <ul>
                        <li> <img src="/mojipgonggo.png" alt='' className="icon" /><p className="fontbox">
                            <Link to= "/mojip" className="delete">모집공고</Link></p></li>
                        <li><img src="/guinhagi.png" alt=''  className="icon"/><p className="fontbox">
                            <Link to= "/guin" className="delete">구인하기</Link></p></li>
                        <li><img src="/dulleobogi.png" alt='' className="icon"/><p className="fontbox">
                            <Link to= "/dulleobogi" className="delete">둘러보기</Link></p></li>
                        <li><img src="/contact.png" alt='' className="icon"/><p className="fontbox">
                            <Link to= "/contact" className="delete">컨택관리</Link></p></li>
                        <li><img src="/community3.png" alt='' className="icon"/><p className="fontbox">
                            <Link to= "/community" className="delete">커뮤니티</Link></p></li>
                    </ul>
                </nav>
                {/* <span onClick={handleLogout} className="logout-link">로그아웃</span> */}
            </aside>
        </div>
    );
};

export default Sidebar;