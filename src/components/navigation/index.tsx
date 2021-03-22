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
          <Menu.SubMenu title={item.displayName} key={item.path} index={item.index}>
            {
              navList(item.children)
            }
          </Menu.SubMenu>
        ): ''
      } else {
        return (
          <Menu.Item key={item.path} index={item.index}>
            <Link to={item.path}>{ item.displayName }</Link>
          </Menu.Item>
        )
      }
    })
  }

  const defaultIndex = ():string => {
    const arr = window.location.pathname.slice(1).split('/')
    let res = ''
    if (arr.length === 1) {
      if (arr[0] === '') {
        return 'home'
      } else {
        return arr[0]
      }
    } else {
      arr.map(v => {
        res += v
        res += '-'
      })
    }
    return res.slice(0, res.length-1)
  } 
  // const defaultOpenSubMenus = 
// console.log(defaultIndex())
  return (
    <div> 
      <Menu className="navigation" mode="vertical" defaultIndex={defaultIndex()} style={{ margin: 0, width: '100%', color: 'rgb(191, 203, 217)', height: '100%', backgroundColor: '' }}>
        {
          navList(Router)
        }
      </Menu>
    </div>
  )
}

export default Navigation