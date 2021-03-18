import { FC, useEffect, useState, createContext } from 'react';
import BGParticle from '../../utils/BGParticle'
import './style.scss'
import LoginForm from './loginForm';
import Loading from '../../components/loading/index';
import RegisterForm from './registerForm';
import { Button } from 'juiu-design';

interface ILoginContext {
  ChangeLoad?: (val: boolean) => void,
  ChangeLoginView?: (val: boolean) => void,
}

export const LoginContext = createContext<ILoginContext>({})

const Login:FC = () => {
  const [loading, setLoading] = useState(false)
  const [isLoginView, setIsLoginView] =  useState(true)
  useEffect  (() => {
    let particle = new BGParticle('login')
    particle.init()
    return () => {
      particle.destory()
    }
  })

  const changeLoading = (val: boolean) => {
    setLoading(val)
  }

  const changeLoginView = (val: boolean) => {
    setIsLoginView(val)
  }

  const providerContext:ILoginContext = {
    ChangeLoad: changeLoading,
    ChangeLoginView: changeLoginView
  }
  return (
    <div id="login" className="login">
      <div className="content">
        <LoginContext.Provider value={ providerContext }>
          <LoginForm className={isLoginView ? 'box showBox' : 'box hiddenBox' } />
          <RegisterForm className={isLoginView ? 'box hiddenBox' : 'box showBox'} />
        </LoginContext.Provider>
      </div>
      {
        loading && <Loading />
      }
    </div>
  )
}

export default Login
