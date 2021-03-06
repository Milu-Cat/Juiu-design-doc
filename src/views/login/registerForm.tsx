import { FC } from 'react';

interface RegisterFormOptions {

}

const RegisterForm: FC<RegisterFormOptions> = (props) => {
  return (
    <div className="login-form">
      <h3>管理员登录</h3>
      <div>
        <i className="iconfont iconyonghu"></i>
      </div>
    </div>
  )
}
export default RegisterForm