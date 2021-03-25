
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

import Home from "../views/home"
import Button from "../views/button"
import Alert from "../views/alert"
import Stretch from "../views/stretch"
import Dropdown from '../views/dropdown';
import Menu from '../views/menu';
import Input from '../views/input';
import Icon from '../views/icon';

// export default routers
export interface RouterOptions {
  name: string,
  displayName: string,
  path: string,
  component?: React.FC<{}>,
  children?: RouterOptions[],
  index: string,
  id: string
}

const HomeRouter:RouterOptions = {
  name: 'home',
  displayName: '首页',
  path: '/home',
  component: Home,
  index: 'home',
  id: 'home'
}
const ComponentsRouter: RouterOptions = {
  name: 'components',
  displayName: '组件',
  path: '/components',
  index: 'components',
  id: 'components',
  children: [
    {
      name: 'button',
      displayName: 'Button',
      path: '/components/button',
      component: Button,
      index: 'components-button',
      id: 'button'
    },
    {
      name: 'alert',
      displayName: 'Alert',
      path: '/components/alert',
      component: Alert,
      index: 'components-alert',
      id: 'alert'
    },
    {
      name: 'stretch',
      displayName: 'Stretch',
      path: '/components/stretch',
      component: Stretch,
      index: 'components-stretch',
      id: 'stretch'
    },
    {
      name: 'dropdown',
      displayName: 'Dropdown',
      path: '/components/dropdown',
      component: Dropdown,
      index: 'components-dropdown',
      id: 'dropdown'
    },
    {
      name: 'menu',
      displayName: 'Menu',
      path: '/components/menu',
      component: Menu,
      index: 'components-menu',
      id: 'menu'
    },
    {
      name: 'input',
      displayName: 'Input',
      path: '/components/input',
      component: Input,
      index: 'components-input',
      id: 'input'
    },
    {
      name: 'icon',
      displayName: 'Icon',
      path: '/components/icon',
      component: Icon,
      index: 'components-icon',
      id: 'icon'
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