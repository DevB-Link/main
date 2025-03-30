import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';


class LoginPage extends Component {
  state={
    value: '',
    password: '',
  };

  handleChange= (e) =>{
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit =(e) => {
    alert('이름: '+ this.state.value + '\n 비밀번호: '+this.state.password);
    e.preventDefault();
  };

  render() {
    return(
      <div>
        <h1>로그인 하세요.</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              이름:
              <input type="text" name="value" value={this.state.value} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              비밀번호:
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form> 
        <div>
          <p>계정이 없으신가요? <Link to= "/register">회원가입</Link></p>
        </div>
      </div>
    );
  }
}

export default LoginPage;