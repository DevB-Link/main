import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Login.css'

class LoginPage extends Component {
  state={
    value: '',
    password: '',
  };

  handleChange= (e) =>{
    this.setState({[e.target.name]: e.target.value});
  };    

  handleSubmit =(e) => {
    e.preventDefault();

    const storedUser=JSON.parse(localStorage.getItem('registeredUser'));
    
    const {value, password}= this.state;

    if (storedUser && value===storedUser.email && password === storedUser.password) {
      
      localStorage.setItem('user', JSON.stringify({userName: storedUser.userName}));
      alert(`${storedUser.userName}님, 로그인 성공!`);
      window.location.href='/home';
    }
    else {
      alert('이메일 또는 비밀번호가 올바르지 않습니다.')
    }
  };

  render() {
    return(
      <div className="login-container">
        <div>
        <img src="/blink-logo.png" alt='' className="logo-img"/>
        </div>
        <h1>B:LINK</h1>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <div className="email-input">
              <input type="text" placeholder="이메일" name="value" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className="password-input">
              <input type="password" placeholder="비밀번호" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">로그인</button>
          </div>
        </form> 
        <div className="size">
          <p>계정이 없으신가요? <Link to= "/register">회원가입</Link></p>
        </div>
      </div>
    );
  }
}

export default LoginPage;