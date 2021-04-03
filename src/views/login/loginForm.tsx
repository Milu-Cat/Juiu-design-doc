import { FC, useContext, useState } from 'react';
import {Input} from 'juiu-design';
import { useHistory, withRouter } from "react-router-dom";
import { LoginContext } from './index';
import classNames from 'classnames';
import { Dispatch } from 'redux';
import {useSelector, useDispatch, connect, ConnectOptions } from 'react-redux'
import Store from '../../store';
import { UserState } from '../../store/user';


interface LoginFormOptions {
  className: string,
  value: UserState,
  setLogin: (data: boolean) => void,
  setAuthor: (data: string) => void,
}

interface stateOptions {
  userReducer: UserState
}

const mapStateToProps = ( state:stateOptions ) => {
  return {
       value: state.userReducer
   }
} 

const mapDispatchToProps = (dispatch: Dispatch ) => ({
  dispatch,
  setLogin: (data: boolean) => dispatch({ type: 'SET_LOGIN', state: data }),
  setAuthor: (data: string) => dispatch({type: 'SET_AUTHOR', state: data })
})

const LoginForm: FC<LoginFormOptions> = (props) => {
  // console.log(props.setLogin)
  const { className, value, setLogin, setAuthor } = props
  // setLogin(true)
  console.log(value)
  const [iconStyle, setIconStyle] = useState(-1)
  const [user, setUser] = useState("")
  // const [login, setLoginState] = useState(value)
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
  function submit() {
    if (!user || !password) {
      alert('请输入用户名或密码！')
      return
    }
    changeLoad(true) 
    timer = setTimeout(() => {
      localStorage.setItem('jujiu-admin-user', user)
      history.push('/home')
      changeLoad(false)
      setLogin(true)
      setAuthor('jujiu')
    }, 500);
  }
  function toRegister() {
    changeLoginView(false)
    // setTimeout(() => props.form.resetFields(), 500)
  }

  const focus = {
    width: '20px',
    opacity: 1
  }
  return (
    <div className={classes}>
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
          <span onClick={ toRegister }>注册</span>
        </div>
        <span className="prompt">欢迎登陆后台管理系统</span>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)