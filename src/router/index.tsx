
// const routers: any[] = [
//   {
//     name: 'Alert',
//     path: '/alert',
//   },
//   {
//     name: 'Menu',
//     path: '/menu',
//   },
//   {
//     name: 'Input',
//     path: '/input',
//   },
//   {
//     name: 'Progress',
//     path: '/progress',
//   },
//   {
//     name: 'Stretch',
//     path: '/stretch',
//   },
//   {
//     name: 'Upload',
//     path: '/upload',
//   },
// ]

import Home from "../views/home/index"
import Button from "../views/button/index"
import Alert from "../views/alert/index"


// export default routers
export interface RouterOptions {
  name: string,
  path: string,
  component?: React.FC<{}>,
  children?: RouterOptions[]
}

const HomeRouter:RouterOptions = {
  name: 'home',
  path: '/',
  component: Home,
}
const ButtonRouter:RouterOptions = {
  name: 'button',
  path: '/button',
  component: Button,
}
const AlertRouter:RouterOptions = {
  name: 'alert',
  path: '/alert',
  component: Alert,
}

const Router = [
  HomeRouter,
  ButtonRouter,
  AlertRouter
]

export default Router