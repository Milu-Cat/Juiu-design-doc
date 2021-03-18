import { FC } from 'react';
import {  Link } from 'react-router-dom';
import { Menu } from 'juiu-design';
import './style.scss'
import Router,{RouterOptions} from '../../router/index'


const Navigation: FC = (props) => { //#263445 
  function navList(list: RouterOptions[]) {
    return list.map(item => {
      if (item.children) {
        return item.children.length ?(
          <Menu.SubMenu title={item.displayName} key={item.path}>
            {
              navList(item.children)
            }
          </Menu.SubMenu>
        ): ''
      } else {
        return (
          <Menu.Item key={item.path}>
            <Link to={item.path}>{ item.displayName }</Link>
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