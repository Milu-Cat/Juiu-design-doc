import { FC } from 'react';
import {  Link } from 'react-router-dom';
import { Menu } from 'juiu-design';
import './style.scss'
import Router,{RouterOptions} from '../../router/index'


const Navigation: FC = (props) => { //#263445 
  function navList(list: RouterOptions[]) {
    return list.map(item => {
      if (item.children && item.children.length) {
        return (
          <Menu.Item>
            <Link to={item.path}>{ item.name }</Link>
          </Menu.Item>
        )
      } else {
        return (
          <Menu.Item key={item.path}>
            <Link to={item.path}>{ item.name }</Link>
          </Menu.Item>
        )
      }
    })
  }

  return (
    <Menu className="navigation" mode="vertical" style={{ margin: 0, width: '100%', color: 'rgb(191, 203, 217)', height: '100%', backgroundColor: 'rgb(48, 65, 86)' }}>
      {
        navList(Router)
      }
    </Menu>
  )
}

export default Navigation