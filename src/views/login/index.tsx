import { FC, useEffect, useState } from 'react';
import BGParticle from '../../utils/BGParticle'
import './style.scss'
import LoginForm from './loginForm';
import Loading from '../../components/loading/index';

const Login:FC = () => {
  const [loading, setLoading] = useState(false)
  useEffect  (() => {
    let particle = new BGParticle('login')
    particle.init()
    return () => {
      particle.destory()
    }
  })
  // function changeLoading(val:boolean) {
  //   setLoading(val)
  // }
  const changeLoading = (val: boolean) => {
    setLoading(val)
  }
  return (
    <div id="login" className="login">
      <div className="content">
        <LoginForm ChangeLoad={(val:boolean) => changeLoading(val) }/>
      </div>
      {
        loading && <Loading />
      }
    </div>
  )
}

export default Login
