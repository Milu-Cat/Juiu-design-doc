import { FC, useContext, useState } from 'react';
import { useHistory, withRouter } from "react-router-dom";
import {Input} from 'juiu-design';
import { LoginContext } from './index'
import classNames from 'classnames'

interface RegisterFormOptions {
  className: string
}

const RegisterForm: FC<RegisterFormOptions> = (props) => {
  const { className } = props
  const [iconStyle, setIconStyle] = useState(-1)
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const context = useContext(LoginContext)
  const changeLoad = context.ChangeLoad as (val: boolean) => void
  const changeLoginView = context.ChangeLoginView as (val: boolean) => void
  const classes = classNames('login-form', className)
  let history = useHistory();
  let timer
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
  function register() {
    if (!user || !password) {
      alert('请输入用户名或密码！')
      return
    }
    changeLoad(true) 
    timer = setTimeout(() => {
      localStorage.setItem('jujiu-admin-user', user)
      history.push('/home')
      changeLoad(false)
    }, 500);
  }
  function toSubmit() {
    changeLoginView(true)
  }
  const focus = {
    width: '20px',
    opacity: 1
  }
  return (
    <div className={ classes }>
      <h3>管理员注册</h3>
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
          <span onClick={ register }>注册</span>
          <span onClick={ toSubmit }>登录</span>
        </div>
        <span className="prompt">欢迎注册后台管理系统</span>
      </div>
    </div>
  )
}
export default RegisterForm