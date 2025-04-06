import React from 'react';
import './MainContent.css';
import { Link } from 'react-router-dom';


const MainContent = ({ user }) => {
    return (
        <div className="page-wrapper">
            <main className="main-content">
                <div className="main-box">
                    <h2 className="font-box">PM {user?.userName}님, <br /> 다시 오신 것을 환영합니다.</h2>
                    <section className="profile-box">
                        <img src="/dummy-profile.png" alt='' className="img-profile" />
                        <div className="text-box">
                            <p>조직의 아이디어를 담당하는 문제해결사</p>
                            <h5>상상력이 풍부한 창조자</h5>
                        </div>
                    </section>
                    <section className="short-information">
                        {/*나중에 profile페이지랑 연동*/}
                        <div className="info-box">
                            <p className="info-item">프로젝트</p>
                            <p className="info-content">7건</p>
                        </div>
                        <div className="divider"></div>
                        <div className="info-box">
                            <p className="info-item">협업경험</p>
                            <p className="info-content">4건</p>
                        </div>
                        <div className="divider"></div>
                        <div clasName="info-box">
                            <p className="info-item">좋아요 수</p>
                            <p className="info-content">32</p>
                        </div>
                    </section>
                    <section className="none">
                        <p>  </p>
                    </section>
                </div>
                <div className="content-wrapper">
                    <div className="recommend-box">
                        <p>{user?.userName}님을 위한 추천 공고</p>
                        <section className="recommend-item">
                            <div className="deadline">
                                <p>D-14</p>
                            </div>
                            <div className="title">
                                <p className="project-title">수현이와 수영하실 분 구합니다. </p>
                                <p className="project-location">서울시 마포구/ 홍익대학교</p>
                            </div>
                            <div className="language">
                                {/*이부분 어떻게 할지 모르겠음. */}
                            </div>
                        </section>
                        <section className="recommend-item">
                            <div className="deadline">
                                <p>D-14</p>
                            </div>
                            <div className="title">
                                <p className="project-title">수현이와 수영하실 분 구합니다. </p>
                                <p className="project-location">서울시 마포구/ 홍익대학교</p>
                            </div>
                            <div className="language">
                                {/*이부분 어떻게 할지 모르겠음. */}
                            </div>
                        </section>
                        <section className="recommend-item">
                            <div className="deadline">
                                <p>D-14</p>
                            </div>
                            <div className="title">
                                <p className="project-title">수현이와 수영하실 분 구합니다. </p>
                                <p className="project-location">서울시 마포구/ 홍익대학교</p>
                            </div>
                            <div className="language">
                                {/*이부분 어떻게 할지 모르겠음. */}
                            </div>
                        </section>
                    </div>
                    <div className="contact-box">
                        <p className="contact-title">{user?.userName}님에게 온 컨택</p>
                            <section className="contact-item">
                                <img className="contact-img" src="/dummy-profile.png" alt=''/>
                                <div className="contact-profile">
                                    <p className="profile-name">변여경</p>
                                    <p className="profile-school">홍익대학교 시각디자인과</p>
                                    <p>{/*이부분 어케함. 모르겠음*/}</p>
                                </div>
                            </section>
                            <section className="contact-item">
                                <img className="contact-img" src="/dummy-profile.png" alt='' />
                                <div className="contact-profile">
                                    <p className="profile-name">임현수</p>
                                    <p className="profile-school">서울시립대학교 컴퓨터과학부</p>
                                    <p>{/*이부분 어케함. 모르겠음*/}</p>
                                </div>
                            </section>
                            <section className="contact-item">
                                <img className="contact-img" src="/dummy-profile.png" alt=''/>
                                <div className="contact-profile">
                                    <p className="profile-name">김주영</p>
                                    <p className="profile-school">서울대학교 디자인과</p>
                                    <p>{/*이부분 어케함. 모르겠음*/}</p>
                                </div>
                            </section>
                    </div>
                </div>
                {/*근데 이건 구현이 되나..? ㅜㅜ*/}
                <div className="commers-box">
                    <p>{user?.userName}님이 좋아할만한 프로젝트</p>
                    <div className="commers-box2">
                        <section className="commers-item">
                            <img className="project-img" src="/dummy-profile.png" alt=''/>
                            <p className="commers-name">THE NORTH FACE 홈페이지</p>
                            <p className="commers-name">리디자인 프로젝트</p>
                            <div className="details">
                                <p className="commers-owner">여러 소유자</p>
                                <p className="commers-date">2025.08.07</p>
                            </div>
                        </section>
                        <section className="commers-item">
                            <img className="project-img" src="/dummy-profile.png" alt=''/>
                            <p className="commers-name">THE NORTH FACE 홈페이지</p>
                            <p className="commers-name">리디자인 프로젝트</p>
                            <div className="details">
                                <p className="commers-owner">여러 소유자</p>
                                <p className="commers-date">2025.08.07</p>
                            </div>
                        </section>
                        <section className="commers-item">
                            <img className="project-img" src="/dummy-profile.png" alt=''/>
                            <p className="commers-name">THE NORTH FACE 홈페이지</p>
                            <p className="commers-name">리디자인 프로젝트</p>
                            <div className="details">
                                <p className="commers-owner">여러 소유자</p>
                                <p className="commers-date">2025.08.07</p>
                            </div>
                        </section>
                        <section className="commers-item">
                            <img className="project-img" src="/dummy-profile.png" alt=''/>
                            <p className="commers-name">THE NORTH FACE 홈페이지</p>
                            <p className="commers-name">리디자인 프로젝트</p>
                            <div className="details">
                                <p className="commers-owner">여러 소유자</p>
                                <p className="commers-date">2025.08.07</p>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="recommend-profile-box">
                        <p>{user?.userName}님이 놓쳐서는 안되는 인재</p>
                        <div className="recommend-profile-box2">
                            <div className="recommend-profile-item">
                                <img className="recommend-profile-img" src="/dummy-profile.png" alt=''/>
                                <div className="details2">
                                    <p className="recommend-profile-name">박도현</p>
                                    <p className="recommend-profile-school">카이스트 전산학부</p>
                                    {/*이거 어케 함. 난 모름*/}
                                </div>
                            </div>
                            <div className="recommend-profile-item">
                                <img className="recommend-profile-img" src="/dummy-profile.png" alt=''/>
                                <div className="details2">
                                    <p className="recommend-profile-name">유지민</p>
                                    <p className="recommend-profile-school">고려대학교 디자인과</p>
                                    {/*이거 어케 함. 난 모름*/}
                                </div>
                            </div>
                            <div className="recommend-profile-item">
                                <img className="recommend-profile-img" src="/dummy-profile.png" alt=''/>
                                <div className="details2">
                                    <p className="recommend-profile-name">정시안</p>
                                    <p className="recommend-profile-school">이화여대 디자인학부</p>
                                    {/*이거 어케 함. 난 모름*/}
                                </div>
                            </div>
                            <div className="recommend-profile-item">
                                <img className="recommend-profile-img" src="/dummy-profile.png" alt=''/>
                                <div className="details2">
                                    <p className="recommend-profile-name">박서우</p>
                                    <p className="recommend-profile-school">서강대학교 컴퓨터공학과</p>
                                    {/*이거 어케 함. 난 모름*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gaeshipan-box">
                        <p>BEST 게시판</p>
                        <div className="gaeshipan-box2">
                            <div className="gaeshipan-item">
                                <p className="gaeshipan-title">어떻게 5월5일에 수업을 함? 미친거?</p>
                                <p className="gaeshipan-time">방금 전</p>
                            </div>
                            <div className="divider2"></div>
                            <div className="gaeshipan-item">
                                <p className="gaeshipan-title">근데 진짜 우리 PM은 미친 게 아닐까?</p>
                                <p className="gaeshipan-time">1시간 전</p>
                            </div>
                            <div className="divider2"></div>
                            <div className="gaeshipan-item">
                                <p className="gaeshipan-title">중간고사 2주 남았어요.</p>
                                <p className="gaeshipan-time">2시간 전</p>
                            </div>
                        </div>

                    </div>
                </div>
                <section className="profile-bx">
                    {/*추천 인재& best 게시판 */}
                </section>
            </main>
        </div>
    );
};

export default MainContent;