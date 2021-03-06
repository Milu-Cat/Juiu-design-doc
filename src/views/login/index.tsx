import { FC, useEffect } from 'react';
import BGParticle from '../../utils/BGParticle'
import './style.scss'
import LoginForm from './loginForm';

const Login: FC = () => {
  useEffect  (() => {
    let particle = new BGParticle('login')
    particle.init()
    return () => {
      particle.destory()
    }
  })
  return (
    <div id="login" className="login">
      <div className="content">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login