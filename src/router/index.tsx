
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
  displayName: string,
  path: string,
  component?: React.FC<{}>,
  children?: RouterOptions[],
  index?:string
}

const HomeRouter:RouterOptions = {
  name: 'home',
  displayName: '首页',
  path: '/home',
  component: Home,
  index: 'home'
}
const ComponentsRouter: RouterOptions = {
  name: 'components',
  displayName: '组件',
  path: '/components',
  index: 'components',
  children: [
    {
      name: 'button',
      displayName: 'button',
      path: '/components/button',
      component: Button,
      index: 'components-button'
    },
    {
      name: 'alert',
      displayName: 'alert',
      path: '/components/alert',
      component: Alert,
      index: 'components-alert'
    }
  ]
 
}
// const AlertRouter:RouterOptions = {
//   name: 'alert',
//   path: '/alert',
//   component: Alert,
// }

const Router = [
  HomeRouter,
  ComponentsRouter,
  // AlertRouter
]

export default Router