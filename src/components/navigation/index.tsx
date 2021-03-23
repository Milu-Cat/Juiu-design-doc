import { FC, useState } from 'react';
import {  Link } from 'react-router-dom';
import { Menu } from 'juiu-design';
import './style.scss'
import Router, { RouterOptions } from '../../router/index'
import { getRouterInfo, findParentsById } from '../../utils/pagesUtils';

const Navigation: FC = (props, ref) => { //#263445 
  const defaultIndex = useState(getRouterInfo('string') as string)[0]
  const defaultOpenSubMenus = findParentsById(Router, defaultIndex, 'index')

  function navList(list: RouterOptions[]) {
    return list.map(item => {
      if (item.children) {
        return item.children.length ?(
          <Menu.SubMenu title={item.displayName} key={item.index} index={item.index}>
            {
              navList(item.children)
            }
          </Menu.SubMenu>
        ): ''
      } else {
        return (
          <Menu.Item key={item.index} index={item.index}>
            <Link to={item.path}>{ item.displayName }</Link>
          </Menu.Item>
        )
      }
    })
  }

  return (
      <Menu className="navigation" mode="vertical" defaultIndex={ defaultIndex } defaultOpenSubMenus={ defaultOpenSubMenus } style={{ margin: 0, width: '100%', color: 'rgb(191, 203, 217)', height: '100%', backgroundColor: '' }}>
        {
          navList(Router)
        }
      </Menu>
  )
}

export default Navigation