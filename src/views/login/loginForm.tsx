import { FC, useState } from 'react';
import {Input} from 'juiu-design';
import { useHistory, withRouter } from "react-router-dom";

interface LoginFormOptions {
  ChangeLoad: (val:boolean)=> void
}

const LoginForm: FC<LoginFormOptions> = (props) => {
  const { ChangeLoad } = props
  const [iconStyle, setIconStyle] = useState(-1)
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  let history = useHistory();
  function HandleFocus(type:string) {
    if (type === 'user'){
      setIconStyle(1)
    } else {
      setIconStyle(2)
    }
  }
  function HandleBlur() {
    setIconStyle(-1)
  }
  function HandleChange(e:React.ChangeEvent<HTMLInputElement>, type:string) {
    if (type === 'user') {
      setUser(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }
  function submit() {
    if (!user || !password) {
      alert('请输入用户名或密码！')
      return
    }
    ChangeLoad(true)
    localStorage.setItem('jujiu-admin-user', user)
    history.push('/home')
  }
  const focus = {
    width: '20px',
    opacity: 1
  }
  return (
    <div className="login-form">
      <h3>管理员登录</h3>
      <div className="form-content">
        <div className="user">
          <i className="iconfont iconyonghu" style={iconStyle === 1 ? focus : {}}></i>
          <Input placeholder="用户名" value={user} onChange={(e) => HandleChange(e,'user')} onFocus={()=>HandleFocus('user')} onBlur={ HandleBlur }/>
        </div>
        <div className="password">
          <i className="iconfont iconmimacopy" style={iconStyle === 2? focus: {}}></i>
          <Input placeholder="密码" value={password} onChange={(e) => HandleChange(e,'password')} onFocus={()=>HandleFocus('password')} onBlur={ HandleBlur }/>
        </div>
        <div className="bottom-button">
          <span onClick={ submit }>登录</span>
          <span>注册</span>
        </div>
        <span className="prompt">欢迎登陆后台管理系统</span>
      </div>
    </div>
  )
}
export default LoginForm