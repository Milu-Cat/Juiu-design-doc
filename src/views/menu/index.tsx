import { FC } from 'react';
import { Menu, Icon } from 'juiu-design';
import {  } from 'juiu-design/dist/components/Menu/menu';
import './index.scss';

const MenuView: FC = () => {
  const code =
  `  import { Menu } from 'juiu-design';

  <Menu mode="vertical" defaultIndex="gg" defaultOpenSubMenus={['cc', 'ff']}>
    <Menu.Item index="aa" key="aa">node_module</Menu.Item>
    <Menu.Item index="bb" key="bb">node_module</Menu.Item>
    <Menu.SubMenu title="src" icon="laugh-beam" index="cc">
      <Menu.Item index="dd">view</Menu.Item>
      <Menu.Item index="ee">view</Menu.Item>
      <Menu.SubMenu title="src" icon="laugh-beam" index="ff">
        <Menu.Item index="gg" key="gg">view</Menu.Item>
      </Menu.SubMenu> 
    </Menu.SubMenu>
  </Menu>`
  return (
    <div className="menu-view">
      <div style={{display: "flex", alignItems: "flex-start"}}>
        <Menu mode="vertical" defaultIndex="gg" defaultOpenSubMenus={['cc', 'ff']}>
            <Menu.Item index="aa" key="aa">node_module</Menu.Item>
            <Menu.Item index="bb" key="bb">node_module</Menu.Item>
            <Menu.SubMenu title="src" icon="icon120menu02" index="cc">
              <Menu.Item index="dd">view</Menu.Item>
              <Menu.Item index="ee">view</Menu.Item>
              <Menu.SubMenu title="src" icon="icon120menu02" index="ff">
                <Menu.Item index="gg" key="gg">view</Menu.Item>
              </Menu.SubMenu> 
            </Menu.SubMenu>
        </Menu>

        <Menu mode="horizontal" defaultIndex="gg" defaultOpenSubMenus={['cc', 'ff']}>
            <Menu.Item index="aa" key="aa">node_module</Menu.Item>
            <Menu.Item index="bb" key="bb">node_module</Menu.Item>
            <Menu.SubMenu title="src" icon="icon120menu02" index="cc">
              <Menu.Item index="dd">view</Menu.Item>
              <Menu.Item index="ee">view</Menu.Item>
            </Menu.SubMenu>
        </Menu>
      </div>
      
      {/* <Icon type="icon120menu02" /> */}
      
      <pre className="menu-code">
      <code>
          {code}
      </code>
      </pre>
      <h4>Menu</h4>
      <table className="doc">
        <thead className="doc-header">
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>值</th>
          </tr>
        </thead>
        <tbody className="doc-body">
          <tr>
            <td>defaultIndex?</td>
            <td>默认选中项</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>mode?</td>
            <td>布局方向</td>
            <td>MenuMode: string</td>
            <td>'horizontal','vertical'</td>
          </tr>
          <tr>
            <td>defaultOpenSubMenus?</td>
            <td>默认展开项</td>
            <td>string[]</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onSelect?</td>
            <td>点击菜单项Menu.Item回调</td>
            <td>'(selectedIndex: string) ={'>'} void'</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <h4>MenuItem</h4>
      <table className="doc">
        <thead className="doc-header">
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>值</th>
          </tr>
        </thead>
        <tbody className="doc-body">
          <tr>
            <td>index</td>
            <td>item的唯一标志</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled?</td>
            <td>item 是否禁用</td>
            <td>boolean</td>
            <td>true, false</td>
          </tr>
        </tbody>
      </table>

      <h4>SubMenu</h4>
      <table className="doc">
        <thead className="doc-header">
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>值</th>
          </tr>
        </thead>
        <tbody className="doc-body">
          <tr>
            <td>index</td>
            <td>SubMenu的唯一标志</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>title</td>
            <td>SubMenu的名称</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>icon?</td>
            <td>title左边的图标</td>
            <td>string</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MenuView